import {PaginatedDocs} from '@database';

import {QueryParams} from '../../types';
import {ReviewApi} from '../review-types';

export interface ReviewRepository {
  getReviews: (
    query: QueryParams & {bookId: string},
  ) => Promise<PaginatedDocs<ReviewApi>>;
}
