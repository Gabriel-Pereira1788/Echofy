import {QueryParams} from '../types';

import {reviewAdapter} from './review-adapter';
import {reviewController} from './review-controller';

async function getReviewsByBook({
  bookId,
  top,
  skip,
}: QueryParams & {bookId: string}) {
  const reviews = await reviewController.getReviews({
    bookId,
    top,
    skip,
  });

  return reviewAdapter.toListReview(reviews);
}

export const reviewService = {
  getReviewsByBook,
};
