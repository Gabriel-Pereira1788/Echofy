import {netStatus, storage} from '@infra';

import {syncHandler} from './handlers';
import {EntitySync} from './types';

const queueRequests: EntitySync[] = [];

function addToQueueRequest<TData>(data: EntitySync<TData>) {
  queueRequests.push(data);

  storage.setItem('@QueueRequest', queueRequests);
}

async function syncEntities() {
  const connectionStatus = netStatus.getConnectionStatus();
  if (!connectionStatus || (connectionStatus && !connectionStatus.connected)) {
    return;
  }
  const _queueRequests = await storage.getItem<EntitySync[]>('@QueueRequest');

  if (_queueRequests && _queueRequests.length > 0) {
    await Promise.all(
      _queueRequests.map(async entitySync => {
        await syncHandler(entitySync);
      }),
    );
    storage.removeItem('@QueueRequest');
  } else {
    console.log('nothing for sync');
  }
}

export const QueueManager = {
  addToQueueRequest,
  syncEntities,
};
