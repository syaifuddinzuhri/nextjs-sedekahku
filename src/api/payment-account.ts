import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/utils/api/callApi";
import { AxiosError } from "axios";
import {
  QueryPropsDetail,
  QueryPropsList,
  QueryPropsSimpleArrayList,
} from "../interfaces/common";
import { PaymentAccountResponse } from "../interfaces/payment_account";

export const usePaymentAccountQuery = (params?: {}, enabled?: boolean) =>
  useQuery<QueryPropsSimpleArrayList<PaymentAccountResponse>, Error>({
    queryKey: ["payment-accounts"],
    queryFn: () =>
      axios<QueryPropsSimpleArrayList<PaymentAccountResponse>>({
        method: "get",
        url: `/payment-account`,
        params,
      }),
    enabled,
  });

export const usePaymentAccountDetailQuery = (id: number, enabled?: boolean) =>
  useQuery<QueryPropsDetail<PaymentAccountResponse>, Error>({
    queryKey: [`payment-account-${id}`],
    queryFn: () =>
      axios<QueryPropsDetail<PaymentAccountResponse>>({
        method: "get",
        url: `/payment-account/${id}`,
      }),
    enabled,
  });
