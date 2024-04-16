import {useQuery} from '@tanstack/react-query';

import {Queries} from '../../types';
import {bookService} from '../book-service';

export function useBookFindById(id: string) {
  const {data, isPending, isError, error} = useQuery({
    queryKey: [Queries.Book, id],
    queryFn: () => bookService.getBookData(id),
  });
  console.log('ERROR', error);
  return {
    bookData: data,
    isLoading: isPending,
    isError: isError,
  };
}
