import { FormError, MutationProps, PaginationParams } from "./common";
import { PaymentAccountResponse } from "./payment_account";
import { ProgramResponse } from "./program";

export interface PaymentResponse {
  id: number;
  no_transaction: string;
  program_id: number;
  payment_account_id: number;
  nominal: number;
  name?: string;
  phone?: string;
  notes?: string;
  status: number;
  program?: ProgramResponse;
  payment_account?: PaymentAccountResponse;
}

export interface PaymentData {
  program: number;
  nominal: number;
  payment_account_id: number;
  anonim: number;
  name?: string;
  phone?: string;
  notes?: string;
}

export interface PaymentMutation<T> extends MutationProps<T>, PaymentData {}
