import {api} from '@api';
import {PaginatedDocs} from '@infra';

import {IReviewExternalData} from '../../../models';

import {ReviewRepository} from './types';

const get: ReviewRepository['get'] = async ({top = 10, skip = 0, bookId}) => {
  const result = await api.get<PaginatedDocs<IReviewExternalData>>(
    `review/find-by-book-id/${bookId}?top=${top}&skip=${skip}`,
  );

  return result.data;
};

const post: ReviewRepository['post'] = async body => {
  const result = await api.post<IReviewExternalData>(
    `review/send-review/${body.bookId}`,
    body,
  );

  return result.data;
};

export const reviewApiRepository: Omit<
  ReviewRepository,
  'create' | 'update' | 'deleteData'
> = {
  get,
  post,
};
