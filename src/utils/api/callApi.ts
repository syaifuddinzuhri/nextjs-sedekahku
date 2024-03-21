import type {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import axiosClient from "axios";
import { getAccessToken } from "./auth/helpers";
import storeUser from "@/src/store/storeUser";
import { sendToLogin } from "../sendToLogin";
import router from "next/router";
let statusError = false;
const instance = axiosClient.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    source: "web",
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = storeUser.get("token");
    if (!config?.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => console.error(error)
);

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err.response) {
      if (err.response.status === 401) {
        if (!statusError) {
          statusError = true;
          sendToLogin(router, "");
        }
      } else {
        return Promise.reject(err);
      }
    }
    if (err.request) {
      return Promise.reject(err.request);
    }

    return Promise.reject(err.message);
  }
);

const axios = <T>(config: AxiosRequestConfig) =>
  instance.request<unknown, T>(config);

export default axios;
