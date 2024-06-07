import {useQuery} from '@tanstack/react-query';

import {Queries} from '../../types';
import {bookService} from '../bookService';

export function useBookFindById(id: string) {
  const {data, isPending, isError} = useQuery({
    queryKey: [Queries.Book, id],
    queryFn: () => bookService.getBookData(id),
  });

  return {
    bookData: data,
    isLoading: isPending,
    isError: isError,
  };
}
