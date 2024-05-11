import {RealmSchema} from '../types';

import {buildReviewSchema} from './buildSchema';
import {AuthorSchema, ReviewSchema} from './schema';

export const reviewSchema: RealmSchema<typeof ReviewSchema> = {
  schema: ReviewSchema,
  buildSchema: buildReviewSchema,
};

export const authorSchema: RealmSchema<typeof AuthorSchema> = {
  schema: AuthorSchema,
};
