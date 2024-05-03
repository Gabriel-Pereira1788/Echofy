import {QueryParams} from '../types';

import {reviewApiRepository} from './repository';
import {ReviewDTO} from './review-types';

async function getReviews(query: QueryParams & {bookId: string}) {
  const result = await reviewApiRepository.getReviews(query);

  return result;
}

async function createReview(reviewDTO: ReviewDTO, bookId: string) {
  const reviewData = await reviewApiRepository.create(reviewDTO, bookId);

  return reviewData;
}
export const reviewController = {
  getReviews,
  createReview,
};
