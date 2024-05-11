import {api} from '@api';
import {PaginatedDocs} from '@infra';

import {IReviewExternalData} from '../review-types';

import {ReviewRepository} from './types';

const getReviews: ReviewRepository['getReviews'] = async ({
  top = 10,
  skip = 0,
  bookId,
}) => {
  const result = await api.get<PaginatedDocs<IReviewExternalData>>(
    `review/find-by-book-id/${bookId}?top=${top}&skip=${skip}`,
  );

  return result.data;
};

const postReview: ReviewRepository['postReview'] = async (body, bookId) => {
  await api.post<IReviewExternalData>(`review/send-review/${bookId}`, body);
};

export const reviewApiRepository: Omit<ReviewRepository, 'create'> = {
  getReviews,
  postReview,
};
