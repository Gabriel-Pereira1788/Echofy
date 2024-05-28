import {getEntity} from '../mappedEntities';
import {EntityRepository} from '../types';

export async function findByIdHandler<TEntityName extends 'book'>(
  entityName: TEntityName,
  id: string,
) {
  const entity = getEntity(entityName);

  const localResult = await entity.local.findById?.(id);
  if (localResult) {
    return localResult as ReturnType<EntityRepository<TEntityName>['findById']>;
  } else {
    const apiResult = await entity.api.findById?.(id);
    if (apiResult) {
      entity.local.create && (await entity.local.create(apiResult));
      return apiResult as ReturnType<EntityRepository<TEntityName>['findById']>;
    } else {
      return null;
    }
  }
}
