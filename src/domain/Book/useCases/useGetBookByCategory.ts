import {usePaginatedList} from '@infra';
import {useAuthContext} from '@providers';

import {CategoryIdentify} from '..';
import {Queries} from '../../types';
import {bookService} from '../book-service';

export function useGetBookListByCategory(category: CategoryIdentify) {
  const {uid} = useAuthContext();
  return usePaginatedList([Queries.BookByCategory, category], page => {
    return bookService.getBookListByCategory({
      uid,
      category,
      skip: page === 1 ? 0 : page * 10,
    });
  });
}
