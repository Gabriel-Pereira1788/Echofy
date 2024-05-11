import {RealmSchema} from '../types';

import {buildBookPlaylistChapters} from './buildSchema';
import {BookPlaylistChapters} from './schema';

export const bookPlaylistChapters: RealmSchema<typeof BookPlaylistChapters> = {
  schema: BookPlaylistChapters,
  buildSchema: buildBookPlaylistChapters,
};
