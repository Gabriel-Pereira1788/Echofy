import {NetInfoState} from '@react-native-community/netinfo';

import {ConnectionStatus, State} from '../types';

export function toConnectionStatus(state: NetInfoState): ConnectionStatus {
  return {
    state: state.type as State,
    connected: !!state.isConnected,
    wifiEnabled: !!state.isWifiEnabled,
  };
}
