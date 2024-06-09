import React, {useState} from 'react';

import {database} from '@database';
import {netStatus} from '@infra';
import {useAuthContext} from '@providers';
import {QueueManager} from '@repositories';

import {AnimatedSplashScreen} from '@components';

import {settingsService} from '../settings';

export function InitializeHandler({children}: React.PropsWithChildren) {
  const {credentials} = useAuthContext();

  const [visible, setVisible] = useState(true);

  async function initializeApp() {
    await database.open(credentials?.id);

    const connection = netStatus.getConnectionStatus();
    if (connection && connection.connected) {
      await QueueManager.syncEntities();
    }

    settingsService.hideSplashScreen();
  }

  if (visible) {
    return (
      <AnimatedSplashScreen
        onInitializeApp={initializeApp}
        onFinish={() => setVisible(false)}
      />
    );
  }
  return <>{children}</>;
}
