import {netStatus, storage} from '@infra';
import reactotron from 'reactotron-react-native';

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

  reactotron.log('QUEUE-REQUESTS', _queueRequests);
  if (_queueRequests && _queueRequests.length > 0) {
    await Promise.all(
      _queueRequests.map(async entitySync => {
        await syncHandler(entitySync);
      }),
    );
    storage.removeItem('@QueueRequest');
  }
}

export const QueueManager = {
  addToQueueRequest,
  syncEntities,
};
