import {buildBookSchema} from './buildSchema';
import {BookSchema} from './schema';

export const bookSchema = {
  schema: BookSchema,
  buildSchema: buildBookSchema,
};
