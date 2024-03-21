import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/utils/api/callApi";
import { AxiosError } from "axios";
import {
  QueryPropsDetail,
  QueryPropsSimpleArrayList,
} from "../interfaces/common";
import { BannerResponse } from "../interfaces/banner";

export const useBannerQuery = (params?: {}, enabled?: boolean) =>
  useQuery<QueryPropsSimpleArrayList<BannerResponse>, Error>({
    queryKey: ["banners"],
    queryFn: () =>
      axios<QueryPropsSimpleArrayList<BannerResponse>>({
        method: "get",
        url: `/banner`,
        params,
      }),
    enabled,
  });
