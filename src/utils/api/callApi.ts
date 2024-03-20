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

export interface Response<T> {
  data: T;
}

export type PaginatedDataResponse<T> = T & {
  pagination: Pagination;
};

export interface PaginatedData<T> {
  data: PaginatedDataResponse<T>;
}

export interface Pagination {
  page: number;
  size: number;
  total_data: number;
  total_pages: number;
}

export interface PageProps {
  browserTimingHeader: string;
}

export interface MutationProps<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> {
  onSuccess?: (
    data: TData,
    variables: TVariables,
    context: TContext | undefined
  ) => Promise<unknown> | unknown;
  onError?: (
    error: TError,
    variables: TVariables,
    context: TContext | undefined
  ) => Promise<unknown> | unknown;
}

export interface MetaTable {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
}

export interface QueryPropsList<T> {
  message: string;
  data: {
    data: T[];
    meta: MetaTable;
    to: number;
    total: number;
  };
}

export interface QueryPropsSimpleList<T> {
  status: boolean;
  message: string;
  data: T[];
}

export interface QueryPropsSimpleWithMetaList<T> {
  message: string;
  data: T[];
  meta: MetaTable;
  to: number;
  total: number;
}

export interface QueryPropsDetail<T> {
  message: string;
  status: boolean;
  data: T;
}

export interface FormError {
  error: boolean;
  message: string;
}

export interface ReqeustDefault {
  status: boolean;
  message: string;
}
