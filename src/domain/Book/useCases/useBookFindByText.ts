import {usePaginatedList} from '@infra';

import {Queries} from '../../types';
import {bookService} from '../book-service';

export function useBookFindByText(text: string) {
  return usePaginatedList([Queries.BooksSearch, text], page => {
    return bookService.getBooksBySearchText({
      searchText: text,
      skip: page === 1 ? 0 : page * 10,
    });
  });
}
