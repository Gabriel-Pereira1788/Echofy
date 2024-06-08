import {QueryParams} from '../types';

import {reviewAdapter} from './reviewAdapter';
import {reviewGateway} from './reviewGateway';
import {ReviewDTO} from './reviewTypes';

async function getReviewsByBook({
  bookId,
  top,
  page,
}: QueryParams & {bookId: string; page: number}) {
  const skip = page === 1 ? 0 : page * 10;
  const reviews = await reviewGateway.getReviews({
    bookId,
    top,
    skip,
  });

  return reviewAdapter.toListReview(reviews);
}

async function sendReview(body: ReviewDTO, bookId: string) {
  await reviewGateway.createReview(body, bookId);
}
export const reviewService = {
  getReviewsByBook,
  sendReview,
};
