import {
  managerRepositoryData,
  reviewApiRepository,
  reviewLocalRepository,
} from '@repositories';

import {QueryParams} from '../types';

import {ReviewDTO} from './reviewTypes';

async function getReviews(query: QueryParams & {bookId: string}) {
  return await managerRepositoryData.fetchAndSync({
    fetchApiRepository: () => reviewApiRepository.get(query),
    fetchLocalRepository: () => reviewLocalRepository.get(query),
    syncLocalRepository: dataToSync =>
      reviewLocalRepository.create(dataToSync!),
    toUseLocalData: result => !!result && result.docs.length > 0,
  });
}

async function createReview(reviewDTO: ReviewDTO, bookId: string) {
  await managerRepositoryData.actionModifier({
    actionApiRepository: () =>
      reviewApiRepository.post({
        ...reviewDTO,
        bookId,
      }),
    actionLocalRepository: data =>
      reviewLocalRepository.post({...data!, bookId}),
    buildEntitySync: data => ({
      action: 'CREATE',
      entity: 'review',
      localId: data?.local_id,
    }),
  });
}
export const reviewGateway = {
  getReviews,
  createReview,
};
