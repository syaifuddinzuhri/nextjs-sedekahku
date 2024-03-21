import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/utils/api/callApi";
import { AxiosError } from "axios";
import { QueryPropsDetail, QueryPropsSimpleList } from "../interfaces/common";
import { SettingResponse } from "../interfaces/setting";

export const useSettingQuery = (params?: {}, enabled?: boolean) =>
  useQuery<QueryPropsSimpleList<SettingResponse>, Error>({
    queryKey: ["settings"],
    queryFn: () =>
      axios<QueryPropsSimpleList<SettingResponse>>({
        method: "get",
        url: `/setting`,
        params,
      }),
    enabled,
  });
