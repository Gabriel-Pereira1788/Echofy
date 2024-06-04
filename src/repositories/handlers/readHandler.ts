import {getEntity} from '../mappedEntities';
import {EntityName, EntityQuery, EntityRepository} from '../types';

export async function readHandler<TEntityName extends EntityName>(
  entityName: TEntityName,
  query?: EntityQuery<TEntityName> & {limitOffset?: number},
): Promise<ReturnType<EntityRepository<TEntityName>['get']> | null> {
  const entity = getEntity(entityName);
  const localResult = await entity.local.get(query!);

  if (
    localResult &&
    Array.isArray(localResult) &&
    localResult.length > (query?.limitOffset || 0)
  ) {
    return localResult as ReturnType<EntityRepository<TEntityName>['get']>;
  }

  if (
    localResult &&
    'docs' in localResult &&
    localResult.docs.length > (query?.limitOffset || 0)
  ) {
    return localResult;
  }

  if (localResult && !('docs' in localResult) && !Array.isArray(localResult)) {
    return localResult;
  }

  const apiResult = await entity.api.get(query!);

  if (apiResult) {
    entity.local.create && entity.local.create(apiResult);
    return apiResult as ReturnType<EntityRepository<TEntityName>['get']>;
  } else {
    return null;
  }
}
