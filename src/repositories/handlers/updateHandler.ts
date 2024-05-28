import {netStatus} from '@infra';

import {getEntity} from '../mappedEntities';
import {QueueManager} from '../queueManager';
import {ActionMode, EntityRepository} from '../types';
import {isNetworkError} from '../utils';

type UpdateConstraints = 'book' | 'review';

type UpdateProps<TEntityName extends UpdateConstraints> = {
  entityName: TEntityName;
  id: string;
  body: Parameters<EntityRepository<TEntityName>['update']>[1];
  mode: ActionMode;
};
export async function updateHandler<TEntityName extends UpdateConstraints>(
  props: UpdateProps<TEntityName>,
) {
  try {
    await tryUpdateData(props);
  } catch (error) {
    if (isNetworkError(error)) {
      const entity = getEntity(props.entityName);
      const data = await entity.local.update?.(props.id, props.body);

      if (props.entityName !== 'book' && data) {
        QueueManager.addToQueueRequest({
          action: 'UPDATE',
          entity: props.entityName,
          localId: props.id,
          data: data,
        });
      }
    }
  }
}

async function tryUpdateData<TEntityName extends UpdateConstraints>({
  entityName,
  id,
  body,
  mode = 'auto',
}: UpdateProps<TEntityName>) {
  const entity = getEntity(entityName);
  const connectionStatus = netStatus.getConnectionStatus();
  if (mode === 'local') {
    entity.local.update?.(id, body);
    return;
  } else if (connectionStatus && connectionStatus.connected) {
    await entity.api.update?.(id, body);
    await entity.local.update?.(id, body);
  } else {
    const data = await entity.local.update?.(id, body);

    if (entityName !== 'book' && data) {
      QueueManager.addToQueueRequest({
        action: 'UPDATE',
        entity: entityName,
        localId: id,
        data: data,
      });
    }
  }
}
