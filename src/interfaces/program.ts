import { FormError, MutationProps, PaginationParams } from "./common";

export interface ProgramParams extends PaginationParams {
  keyword?: string;
}

export interface Images {
  id: number;
  program_id: number;
  image: number;
}

export interface ProgramResponse {
  id: number;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  duration?: string;
  end_date?: string;
  total: number;
  images?: Images[];
}
