import {useQuery} from '@tanstack/react-query';

import {Queries} from '../../types/queries';
import {bookService} from '../book-service';

export function useBookReading(id: string) {
  const {data, isPending, isError} = useQuery({
    queryKey: [Queries.BookReading, id],
    queryFn: () => bookService.getBookReading(id),
  });

  return {
    readingText: data,
    isLoading: isPending,
    isError: isError,
  };
}
