import {useMutation, useQueryClient} from '@tanstack/react-query';

import {CommonError, MutationConfig, Queries} from '../../types';
import {bookService} from '../book-service';
import {Book} from '../book-types';

type Variables = {
  bookId: string;
  body: Partial<Book>;
};
export function useBookUpdateLocalChapter(
  config?: MutationConfig<null, CommonError>,
) {
  const queryClient = useQueryClient();
  const {mutate} = useMutation<unknown, Error, Variables>({
    mutationFn: ({body, bookId}) =>
      bookService.updateLocalBookChapter(bookId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [Queries.BookChapter],
      });
      if (config && config.onSuccess) {
        config.onSuccess(null);
      }
    },
    onError: () => {
      if (config && config.onError) {
        config.onError({
          message: 'Error',
          status: 500,
        });
      }
    },
  });

  return {
    updateLocalChapter: (bookId: string, body: Partial<Book>) =>
      mutate({bookId, body}),
  };
}
