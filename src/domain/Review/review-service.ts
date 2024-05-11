import {QueryParams} from '../types';

import {reviewAdapter} from './review-adapter';
import {reviewController} from './review-controller';
import {ReviewDTO} from './review-types';

async function getReviewsByBook({
  bookId,
  top,
  page,
}: QueryParams & {bookId: string; page: number}) {
  const skip = page === 1 ? 0 : page * 10;
  const reviews = await reviewController.getReviews({
    bookId,
    top,
    skip,
  });

  return reviewAdapter.toListReview(reviews);
}

async function sendReview(body: ReviewDTO, bookId: string) {
  await reviewController.createReview(body, bookId);
}
export const reviewService = {
  getReviewsByBook,
  sendReview,
};
