import {PaginatedDocs} from '@database';

import {QueryParams} from '../../types';
import {ReviewApi, ReviewDTO} from '../review-types';

export interface ReviewRepository {
  getReviews: (
    query: QueryParams & {bookId: string},
  ) => Promise<PaginatedDocs<ReviewApi>>;

  create: (body: ReviewDTO, bookId: string) => Promise<ReviewApi>;
}
