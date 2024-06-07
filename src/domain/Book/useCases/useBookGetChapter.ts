import {useQuery} from '@tanstack/react-query';

import {Queries} from '../../types';
import {bookService} from '../bookService';

export function useBookGetChapter(bookId?: string, chapterNumber?: number) {
  const {data, isLoading, isError} = useQuery({
    queryKey: [Queries.BookChapter, bookId, chapterNumber],
    queryFn: () => bookService.getBookChapter(bookId, chapterNumber),
  });

  return {
    data,
    isLoading,
    isError,
  };
}
