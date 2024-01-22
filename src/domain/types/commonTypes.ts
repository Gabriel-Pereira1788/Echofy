import {AxiosError} from 'axios';

export interface MutationConfig<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (error: AxiosError) => void;
}
