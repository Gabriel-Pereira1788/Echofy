import {netStatus} from '@infra';

import {getEntity} from '../mappedEntities';
import {QueueManager} from '../queueManager';
import {isNetworkError} from '../utils';

type DeleteConstraints = 'favorites';
export async function deleteHandler<TEntityName extends DeleteConstraints>(
  entityName: TEntityName,
  id: string,
) {
  try {
    await tryDeleteData(entityName, id);
  } catch (error) {
    if (isNetworkError(error)) {
      const entity = getEntity(entityName);
      await entity.local.deleteData?.(id);
      QueueManager.addToQueueRequest({
        entity: entityName,
        localId: id,
        action: 'DELETE',
      });
    }
  }
}

async function tryDeleteData<TEntityName extends DeleteConstraints>(
  entityName: TEntityName,
  id: string,
) {
  const entity = getEntity(entityName);
  const connectionStatus = netStatus.getConnectionStatus();

  if (connectionStatus && connectionStatus.connected) {
    await entity.api.deleteData?.(id);
    await entity.local.deleteData?.(id);
  } else {
    await entity.local.deleteData?.(id);
    QueueManager.addToQueueRequest({
      entity: entityName,
      localId: id,
      action: 'DELETE',
    });
  }
}
