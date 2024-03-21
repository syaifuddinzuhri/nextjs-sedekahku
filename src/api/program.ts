import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/utils/api/callApi";
import { AxiosError } from "axios";
import { ProgramParams, ProgramResponse } from "../interfaces/program";
import { QueryPropsDetail, QueryPropsList } from "../interfaces/common";

export const useProgramQuery = (params?: ProgramParams, enabled?: boolean) =>
  useQuery<QueryPropsList<ProgramResponse>, Error>({
    queryKey: ["programs"],
    queryFn: () =>
      axios<QueryPropsList<ProgramResponse>>({
        method: "get",
        url: `/program`,
        params,
      }),
    enabled,
  });

export const useProgramDetailQuery = (slug: string, enabled?: boolean) =>
  useQuery<QueryPropsDetail<ProgramResponse>, Error>({
    queryKey: [`program-${slug}`],
    queryFn: () =>
      axios<QueryPropsDetail<ProgramResponse>>({
        method: "get",
        url: `/program/${slug}`,
      }),
    enabled,
  });
