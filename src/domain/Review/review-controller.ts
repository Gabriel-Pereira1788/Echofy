import {EntitiesRepository} from '@repositories';

import {QueryParams} from '../types';

import {ReviewDTO} from './review-types';

async function getReviews(query: QueryParams & {bookId: string}) {
  return await EntitiesRepository.read('review', query);
}

async function createReview(reviewDTO: ReviewDTO, bookId: string) {
  await EntitiesRepository.post('review', {bookId: bookId, ...reviewDTO});
}
export const reviewController = {
  getReviews,
  createReview,
};
