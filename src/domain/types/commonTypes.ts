import {AxiosError} from 'axios';

export interface MutationConfig<TData, TError = AxiosError<{message: string}>> {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
}

export type CommonError = {
  status: number;
  message: string;
};

export type QueryParams = {
  top?: number;
  skip?: number;
  page?: number;
};
