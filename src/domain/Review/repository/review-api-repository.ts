import {api} from '@api';
import {PaginatedDocs} from '@infra';

import {ReviewApi} from '../review-types';

import {ReviewRepository} from './types';

const getReviews: ReviewRepository['getReviews'] = async ({
  top = 10,
  skip = 0,
  bookId,
}) => {
  const result = await api.get<PaginatedDocs<ReviewApi>>(
    `review/find-by-book-id/${bookId}?top=${top}&skip=${skip}`,
  );

  return result.data;
};

export const reviewApiRepository: ReviewRepository = {
  getReviews,
};
