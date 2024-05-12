import {bookApiRepository, bookLocalRepository} from './Book';
import {categoryApiRepository} from './Category/category-api-repository';
import {categoryLocalRepository} from './Category/category-local-repository';
import {reviewApiRepository, reviewLocalRepository} from './Review';
import {Entity, EntityName, EntityQuery, EntityRepository} from './types';

const mappedEntities: Record<EntityName, Entity> = {
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
};
async function read<Name extends EntityName>(
  entityName: Name,
  query?: EntityQuery<Name>,
) {
  const entity = mappedEntities[entityName];
  const localResult = await entity.local.get(query!);
  if (
    Array.isArray(localResult) ||
    (localResult && localResult.docs.length > 0) ||
    localResult
  ) {
    return localResult as ReturnType<EntityRepository<Name>['get']>;
  } else {
    const apiResult = await entity.api.get(query!);
    if (apiResult) {
      entity.local.create && (await entity.local.create(apiResult));
      return apiResult as ReturnType<EntityRepository<Name>['get']>;
    } else {
      return null;
    }
  }
}

async function findById<Name extends 'book'>(entityName: Name, id: string) {
  const entity = mappedEntities[entityName];

  const localResult = await entity.local.findById?.(id);
  if (localResult) {
    return localResult as ReturnType<EntityRepository<Name>['findById']>;
  } else {
    const apiResult = await entity.api.findById?.(id);
    if (apiResult) {
      entity.local.create && (await entity.local.create(apiResult));
      return apiResult as ReturnType<EntityRepository<Name>['findById']>;
    } else {
      return null;
    }
  }
}

async function create<Name extends 'review'>(
  entityName: Name,
  body: Parameters<EntityRepository<Name>['post']>[0],
) {
  const entity = mappedEntities[entityName];
  await entity.api.post?.(body);
  await entity.local.post?.(body);
}

export const EntitiesRepository = {
  read,
  create,
  findById,
};
