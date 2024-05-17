import {useEffect, useState} from 'react';

import {ConnectionStatus, netStatus} from '@infra';

export function useConnectionStatus() {
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus | null>(null);

  useEffect(() => {
    netStatus.addListener(status => {
      setConnectionStatus(status);
    });
  }, []);

  return connectionStatus;
}
