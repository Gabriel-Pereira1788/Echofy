import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AxiosError} from 'axios';

import {CommonError, MutationConfig, Queries} from '../../types';

type Props<Variables> = {
  serviceFn: (variables: Variables) => Promise<void>;
  config?: MutationConfig<null, CommonError>;
};
export function useToggleSendToFavorite<Variables>({
  serviceFn,
  config,
}: Props<Variables>) {
  const queryClient = useQueryClient();
  const {mutate, isSuccess, isPending} = useMutation<unknown, Error, Variables>(
    {
      mutationFn: serviceFn,
      onMutate: () => {
        queryClient.cancelQueries({queryKey: [Queries.FavoriteBook]});
      },
      onSettled: () => {
        queryClient.invalidateQueries({
          queryKey: [Queries.FavoriteBook],
        });
        queryClient.invalidateQueries({
          queryKey: [Queries.Favorites],
        });
      },
      onSuccess: async () => {
        if (config && config.onSuccess) {
          config.onSuccess(null);
        }
      },
      onError: error => {
        console.log('ERROR-ON-TOGGLE', error);
        if (config && config.onError) {
          const Error = error as AxiosError<{message: string}>;
          const ERROR_MESSAGE = 'Something is wrong, try again later.';
          config.onError({
            message: ERROR_MESSAGE,
            status: Error && Error.response ? Error.response?.status : 500,
          });
        }
      },
    },
  );

  return {
    mutate,
    isPending,
    isSuccess,
  };
}
