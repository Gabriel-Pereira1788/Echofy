import NetInfo from '@react-native-community/netinfo';

import {ConnectionStatus, NetStatusImpl} from '../types';

import {toConnectionStatus} from './toConnectionStatus';

let connectionStatus: ConnectionStatus | null = null;

function getConnectionStatus(): ConnectionStatus | null {
  NetInfo.fetch().then(state => {
    connectionStatus = toConnectionStatus(state);
  });

  return connectionStatus;
}

function addListener(callback: (status: ConnectionStatus) => void) {
  NetInfo.addEventListener(state => {
    connectionStatus = toConnectionStatus(state);
    callback(connectionStatus);
  });
}

export const netInfo: NetStatusImpl = {
  connectionStatus,
  getConnectionStatus,
  addListener,
};
