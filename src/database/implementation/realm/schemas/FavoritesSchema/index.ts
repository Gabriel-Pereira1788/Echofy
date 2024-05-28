import {RealmSchema} from '../types';

import {buildFavoriteSchema} from './buildSchema';
import {FavoriteSchema} from './schema';

export const favoriteSchema: RealmSchema<typeof FavoriteSchema> = {
  schema: FavoriteSchema,
  buildSchema: buildFavoriteSchema,
};
