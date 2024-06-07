import {netStatus} from '@infra';

import {QueueManager} from './queueManager';
import {EntitySync} from './types';
import {isNetworkError} from './utils';

interface Props<TResult> {
  toUseLocalData: (result: TResult) => boolean;
  fetchApiRepository: () => Promise<TResult>;
  fetchLocalRepository: () => Promise<TResult>;
  syncLocalRepository: (dataToSync: TResult) => void;
}

async function fetchAndSync<Result>({
  toUseLocalData,
  fetchApiRepository,
  fetchLocalRepository,
  syncLocalRepository,
}: Props<Result>) {
  const localResult = await fetchLocalRepository();

  if (toUseLocalData(localResult)) {
    return localResult;
  }

  const apiResult = await fetchApiRepository();

  if (apiResult) {
    await syncLocalRepository(apiResult);
    return apiResult;
  } else {
    return null;
  }
}

interface ActionModifierProps<TResponse = undefined> {
  actionApiRepository: () => Promise<TResponse>;
  actionLocalRepository: (response?: TResponse) => Promise<TResponse>;
  buildEntitySync: (response?: TResponse) => EntitySync;
}

async function actionModifier<Response = undefined>({
  actionApiRepository,
  actionLocalRepository,
  buildEntitySync,
}: ActionModifierProps<Response>) {
  try {
    const connectionStatus = netStatus.getConnectionStatus();

    if (connectionStatus && connectionStatus.connected) {
      const response = await actionApiRepository();

      await actionLocalRepository(response);
    } else {
      const localResponse = await actionLocalRepository();
      const entitySync = buildEntitySync(localResponse);
      QueueManager.addToQueueRequest({
        ...entitySync,
        data: localResponse,
      });
    }
  } catch (error) {
    if (isNetworkError(error)) {
      const response = await actionLocalRepository();
      const entitySync = buildEntitySync(response);
      QueueManager.addToQueueRequest({
        ...entitySync,
        data: response,
      });
    }
  }
}

export const managerRepositoryData = {fetchAndSync, actionModifier};
