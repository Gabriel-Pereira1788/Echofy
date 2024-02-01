import {useQuery} from '@tanstack/react-query';

import {useAuthContext} from '../../../app/providers';
import {Queries} from '../../types';
import {bookService} from '../book-service';

export function useBookSections() {
  const {uid} = useAuthContext();

  const {data, isPending, isError} = useQuery({
    queryKey: [Queries.BookSections],
    queryFn: () => bookService.getBookSections(uid),
  });

  return {
    bookSections: data,
    isLoading: isPending,
    isError,
  };
}
