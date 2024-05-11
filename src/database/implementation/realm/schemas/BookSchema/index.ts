import {RealmSchema} from '../types';

import {buildBookSchema} from './buildSchema';
import {BookSchema} from './schema';

export const bookSchema: RealmSchema<typeof BookSchema> = {
  schema: BookSchema,
  buildSchema: buildBookSchema,
};
