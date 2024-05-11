import {RealmSchema} from '../types';

import {buildBookCategorySchema} from './buildSchema';
import {BookCategorySchema} from './schema';

export const bookCategorySchema: RealmSchema<typeof BookCategorySchema> = {
  schema: BookCategorySchema,
  buildSchema: buildBookCategorySchema,
};
