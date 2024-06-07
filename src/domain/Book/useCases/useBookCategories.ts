import {useQuery} from '@tanstack/react-query';

import {Queries} from '../../types';
import {bookService} from '../bookService';

export function useBookCategories() {
  const {data, isLoading, isError, error} = useQuery({
    queryKey: [Queries.BookCategories],
    queryFn: bookService.getCategories,
  });

  return {
    categories: data,
    isError,
    isLoading,
    error,
  };
}
