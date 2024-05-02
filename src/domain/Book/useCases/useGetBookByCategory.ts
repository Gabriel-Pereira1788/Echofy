import {usePaginatedList} from '@infra';
import {useAuthContext} from '@providers';

import {CategoryIdentify} from '..';
import {Queries} from '../../types';
import {bookService} from '../book-service';

export function useGetBookListByCategory(
  category: CategoryIdentify,
  initialDataLength: number = 0,
) {
  const {uid} = useAuthContext();
  return usePaginatedList({
    queryKey: [Queries.BookByCategory, category],
    fetchPage: page => {
      return bookService.getBookListByCategory({
        uid,
        category,
        page,
        skip: page === 1 ? initialDataLength : page * 10,
      });
    },
  });
}
