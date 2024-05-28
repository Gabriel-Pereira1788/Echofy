import {netStatus} from '@infra';

import {getEntity} from '../mappedEntities';
import {QueueManager} from '../queueManager';
import {EntityRepository} from '../types';
import {isNetworkError} from '../utils';

type Constraints = 'review' | 'favorites';

export async function postHandler<TEntityName extends Constraints>(
  entityName: TEntityName,
  body: Parameters<EntityRepository<TEntityName>['post']>[0],
) {
  try {
    await tryPostApi(entityName, body);
  } catch (error) {
    if (isNetworkError(error)) {
      const entity = getEntity(entityName);
      const data = await entity.local.post?.(body);

      if (data && data.local_id) {
        QueueManager.addToQueueRequest({
          entity: entityName,
          localId: data.local_id,
          action: 'CREATE',
          data,
        });
      }
    }
  }
}

async function tryPostApi<TEntityName extends Constraints>(
  entityName: TEntityName,
  body: Parameters<EntityRepository<TEntityName>['post']>[0],
) {
  const entity = getEntity(entityName);
  const connectionStatus = netStatus.getConnectionStatus();

  if (connectionStatus && connectionStatus.connected) {
    const result = await entity.api.post?.(body);
    await entity.local.post?.(result);
  } else {
    const data = await entity.local.post?.(body);
    if (data && data.local_id) {
      QueueManager.addToQueueRequest({
        entity: entityName,
        localId: data.local_id,
        action: 'CREATE',
        data,
      });
    }
  }
}
