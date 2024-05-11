import {QueryParams} from '../types';

import {reviewApiRepository, reviewLocalRepository} from './repository';
import {ReviewDTO} from './review-types';

async function getReviews(query: QueryParams & {bookId: string}) {
  const localResult = await reviewLocalRepository.getReviews(query);
  console.log('review-local-result', localResult);
  if (localResult && localResult.docs.length > 0) {
    return localResult;
  } else {
    const result = await reviewApiRepository.getReviews(query);
    if (result) {
      reviewLocalRepository.create(result.docs);
      return result;
    } else {
      return null;
    }
  }
}

async function createReview(reviewDTO: ReviewDTO, bookId: string) {
  await reviewLocalRepository.postReview(reviewDTO, bookId);
  await reviewApiRepository.postReview(reviewDTO, bookId);
}
export const reviewController = {
  getReviews,
  createReview,
};
