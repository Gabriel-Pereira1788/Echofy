import {QueryParams} from '@domain';
import {PaginatedDocs} from '@infra';

import {IReviewExternalData, ReviewDTO} from '../../models';
import {RepoImpl} from '../types';

export type ReviewGetQuery = QueryParams & {bookId?: string};

export interface ReviewRepo extends RepoImpl {
  get: (
    query: ReviewGetQuery,
  ) => Promise<PaginatedDocs<IReviewExternalData> | null>;
  post: (body: ReviewDTO & {bookId: string}) => Promise<void>;
}
