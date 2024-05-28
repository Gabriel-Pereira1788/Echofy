import React, {useState} from 'react';

import {database} from '@database';
import {netStatus} from '@infra';
import {QueueManager} from '@repositories';
import BootSplash from 'react-native-bootsplash';

import {AnimatedSplashScreen} from '@components';

export function InitializeHandler({children}: React.PropsWithChildren) {
  const [visible, setVisible] = useState(true);

  async function initializeApp() {
    try {
      netStatus.getConnectionStatus();
      netStatus.addListener(status => {
        console.log('STATUS', status);
      });
      await database.open();
      await QueueManager.syncEntities();
      BootSplash.hide();
    } catch (error) {
      BootSplash.hide();
    }
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
