import React, {useState} from 'react';

import {database} from '@database';
import {bookService} from '@domain';
import {netStatus} from '@infra';
import {useAuthContext} from '@providers';
import {QueueManager} from '@repositories';
import BootSplash from 'react-native-bootsplash';

import {AnimatedSplashScreen} from '@components';

export function InitializeHandler({children}: React.PropsWithChildren) {
  const [visible, setVisible] = useState(true);
  const {credentials} = useAuthContext();

  async function initializeApp() {
    try {
      netStatus.getConnectionStatus();

      await database.open(credentials?.id);
      await QueueManager.syncEntities();
      bookService.syncBooksData();
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
