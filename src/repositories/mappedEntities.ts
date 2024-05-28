import {
  bookApiRepository,
  bookLocalRepository,
  categoryApiRepository,
  categoryLocalRepository,
  reviewApiRepository,
  reviewLocalRepository,
} from './entities';
import {
  favoriteApiRepository,
  favoriteLocalRepository,
} from './entities/Favorites';
import {Entity, EntityName} from './types';

export const mappedEntities: Record<EntityName, Entity> = {
  review: {
    api: reviewApiRepository,
    local: reviewLocalRepository,
  },
  book: {
    api: bookApiRepository,
    local: bookLocalRepository,
  },
  category: {
    api: categoryApiRepository,
    local: categoryLocalRepository,
  },
  favorites: {
    api: favoriteApiRepository,
    local: favoriteLocalRepository,
  },
};

export function getEntity(entityName: EntityName) {
  return mappedEntities[entityName];
}
