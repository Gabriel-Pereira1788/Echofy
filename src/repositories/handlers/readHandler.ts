import {getEntity} from '../mappedEntities';
import {EntityName, EntityQuery, EntityRepository} from '../types';

export async function readHandler<TEntityName extends EntityName>(
  entityName: TEntityName,
  query?: EntityQuery<TEntityName>,
): Promise<ReturnType<EntityRepository<TEntityName>['get']> | null> {
  const entity = getEntity(entityName);
  const localResult = await entity.local.get(query!);

  console.log('LOCAL-R', localResult);
  if (localResult && Array.isArray(localResult) && localResult.length > 0) {
    return localResult as ReturnType<EntityRepository<TEntityName>['get']>;
  }

  if (localResult && 'docs' in localResult && localResult.docs.length > 0) {
    return localResult;
  }

  if (localResult && !('docs' in localResult) && !Array.isArray(localResult)) {
    return localResult;
  }

  const apiResult = await entity.api.get(query!);

  console.log('API-RESULT', apiResult);
  if (apiResult) {
    entity.local.create && (await entity.local.create(apiResult));
    return apiResult as ReturnType<EntityRepository<TEntityName>['get']>;
  } else {
    return null;
  }
}
