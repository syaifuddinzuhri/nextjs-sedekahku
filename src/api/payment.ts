import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/utils/api/callApi";
import { AxiosError } from "axios";
import {
  QueryPropsDetail,
  QueryPropsList,
  Response,
} from "../interfaces/common";
import { PaymentMutation, PaymentResponse } from "../interfaces/payment";

export const usePaymentDetailQuery = (trx: string, enabled?: boolean) =>
  useQuery<QueryPropsDetail<PaymentResponse>, Error>({
    queryKey: [`payment-${trx}`],
    queryFn: () =>
      axios<QueryPropsDetail<PaymentResponse>>({
        method: "get",
        url: `/payment/${trx}`,
      }),
    enabled,
  });

export const useAddPaymentMutation = ({
  onSuccess,
  onError,
  ...rest
}: PaymentMutation<Response<any>>) =>
  useMutation<Response<any>>({
    mutationFn: async () => {
      return await axios({
        method: "post",
        url: "/payment",
        data: rest,
      });
    },
    onSuccess,
    onError,
  });
