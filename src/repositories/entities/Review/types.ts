import {QueryParams} from '@domain';
import {PaginatedDocs} from '@infra';

import {IReviewExternalData, ReviewDTO} from '../../../models';
import {RepoImpl} from '../../types';

export type ReviewGetQuery = QueryParams & {bookId?: string};

export interface ReviewRepository extends RepoImpl {
  get: (
    query: ReviewGetQuery,
  ) => Promise<PaginatedDocs<IReviewExternalData> | null>;
  post: (
    body: ReviewDTO & {bookId: string},
  ) => Promise<IReviewExternalData | undefined>;
  update: (id: string, body: Partial<IReviewExternalData>) => Promise<void>;
  deleteData: (id: string) => Promise<void>;
  create: (
    data:
      | IReviewExternalData[]
      | {docs: IReviewExternalData[]}
      | IReviewExternalData,
  ) => void;
}
