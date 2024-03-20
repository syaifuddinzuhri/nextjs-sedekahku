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

export interface MutationProps<TData = unknown, TError = unknown, TVariables = void, TContext = unknown> {
    onSuccess?: (data: TData, variables: TVariables, context: TContext | undefined) => Promise<unknown> | unknown;
    onError?: (error: TError, variables: TVariables, context: TContext | undefined) => Promise<unknown> | unknown;
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