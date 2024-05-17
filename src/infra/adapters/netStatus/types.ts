export type State = 'unknown' | 'none' | 'cellular' | 'wifi';

export interface ConnectionStatus {
  connected: boolean;
  wifiEnabled: boolean;
  state?: State;
}

export interface NetStatusImpl {
  connectionStatus: ConnectionStatus | null;
  getConnectionStatus: () => ConnectionStatus | null;
  addListener: (callback: (status: ConnectionStatus) => void) => void;
}
