import {Queries, CommonError, MutationConfig} from '@domain';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AxiosError} from 'axios';

import {reviewService} from '../review-service';
import {ReviewDTO} from '../review-types';

export function useSendReview(
  bookId: string,
  config: MutationConfig<null, CommonError>,
) {
  const queryClient = useQueryClient();
  const {mutate, isSuccess} = useMutation<void, Error, ReviewDTO>({
    mutationFn: variables => reviewService.sendReview(variables, bookId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [Queries.ReviewsList],
      });
      if (config.onSuccess) {
        config.onSuccess(null);
      }
    },
    onError: error => {
      if (config.onError) {
        const Error = error as AxiosError<{message: string}>;
        const ERROR_MESSAGE = 'Something is wrong, try again later.';
        config.onError({
          message: ERROR_MESSAGE,
          status: Error && Error.response ? Error.response?.status : 500,
        });
      }
    },
  });

  return {
    send: mutate,
    isSuccess,
  };
}
