import {usePaginatedList} from '@infra';

import {CategoryIdentify} from '..';
import {Queries} from '../../types';
import {bookService} from '../book-service';

export function useGetBookListByCategory(category: CategoryIdentify) {
  return usePaginatedList([Queries.BookByCategory, category], page => {
    return bookService.getBookListByCategory({
      category,
      skip: page === 1 ? 0 : page * 10,
    });
  });
}
