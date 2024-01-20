export interface MutationConfig<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (error: unknown) => void;
}
