import {getEntity} from '../mappedEntities';
import {EntitySync} from '../types';

export async function syncHandler(entitySync: EntitySync) {
  const entity = getEntity(entitySync.entity);
  switch (entitySync.action) {
    case 'CREATE':
      const result = await entity.api.post?.(entitySync.data);
      await entity.local.deleteData?.(entitySync.localId);
      await entity.local.post?.(result);
      break;
    case 'DELETE':
      await entity.api.deleteData?.(entitySync.localId);
      break;
    case 'UPDATE':
      await entity.api.update?.(entitySync.localId, entitySync.data);
      break;
  }
}
