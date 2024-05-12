import {RealmSchema} from '../types';

import {buildBookSchema} from './buildSchema';
import {BookPlaylistChaptersSchema, BookSchema} from './schema';

export const bookSchema: RealmSchema<typeof BookSchema> = {
  schema: BookSchema,
  buildSchema: buildBookSchema,
};

export const bookPlaylistChaptersSchema: RealmSchema<
  typeof BookPlaylistChaptersSchema
> = {
  schema: BookPlaylistChaptersSchema,
};
