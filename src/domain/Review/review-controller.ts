import {QueryParams} from '../types';

import {reviewApiRepository} from './repository';

async function getReviews(query: QueryParams & {bookId: string}) {
  const result = await reviewApiRepository.getReviews(query);

  return result;
}
export const reviewController = {
  getReviews,
};
