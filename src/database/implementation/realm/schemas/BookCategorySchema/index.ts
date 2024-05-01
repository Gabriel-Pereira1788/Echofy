import {buildBookCategorySchema} from './buildSchema';
import {BookCategorySchema} from './schema';

export const bookCategorySchema = {
  schema: BookCategorySchema,
  buildSchema: buildBookCategorySchema,
};
