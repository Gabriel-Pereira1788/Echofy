import {usePaginatedList} from '@infra';

import {Queries} from '../../types';
import {bookService} from '../bookService';

export function useBookFindByText(text: string) {
  return usePaginatedList({
    queryKey: [Queries.BooksSearch, text],
    fetchPage: page => {
      return bookService.getBooksBySearchText({
        searchText: text,
        skip: page === 1 ? 0 : page * 10,
      });
    },
  });
}
