import {api} from '@api';
import {PaginatedDocs} from '@infra';

import {IReviewExternalData} from '../../models';

import {ReviewRepo} from './types';

const get: ReviewRepo['get'] = async ({top = 10, skip = 0, bookId}) => {
  const result = await api.get<PaginatedDocs<IReviewExternalData>>(
    `review/find-by-book-id/${bookId}?top=${top}&skip=${skip}`,
  );

  return result.data;
};

const post: ReviewRepo['post'] = async body => {
  await api.post<IReviewExternalData>(
    `review/send-review/${body.bookId}`,
    body,
  );
};

const findById = async () => {
  return null;
};

export const reviewApiRepository: Omit<ReviewRepo, 'create'> = {
  get,
  post,
  findById,
};
