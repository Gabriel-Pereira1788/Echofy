import {CrudSchemaData, Schemas} from '@database';
import {PaginatedDocs} from '@infra';

import {QueryParams} from '../../types';
import {IReviewExternalData, ReviewDTO} from '../review-types';

export interface ReviewRepository {
  getReviews: (
    query: QueryParams & {bookId: string},
  ) => Promise<PaginatedDocs<IReviewExternalData> | null>;

  postReview: (body: ReviewDTO, bookId: string) => Promise<void>;
  create: (
    data: CrudSchemaData<Schemas.Review> | CrudSchemaData<Schemas.Review>[],
  ) => void;
}
