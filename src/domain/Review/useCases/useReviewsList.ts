import {usePaginatedList} from '@infra';

import {Queries} from '../../types';
import {reviewService} from '../review-service';

export function useReviewsList(bookId: string, customCount?: number) {
  const {list, ...rest} = usePaginatedList({
    queryKey: [Queries.ReviewsList, bookId + customCount],
    fetchPage: page => {
      const skip = page === 1 ? 0 : page * 10;
      return reviewService.getReviewsByBook({
        bookId,
        skip,
        top: customCount,
      });
    },
  });

  return {
    reviews: list,
    ...rest,
  };
}
