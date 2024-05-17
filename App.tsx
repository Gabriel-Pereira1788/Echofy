/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {database, realmImpl, setDatabaseImpl} from '@database';
import {
  expoFsImpl,
  netStatus,
  queryClient,
  setAudioTrackerImpl,
  setFileSystemImpl,
  trackPlayerImpl,
} from '@infra';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClientProvider} from '@tanstack/react-query';
import BootSplash from 'react-native-bootsplash';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AnimatedSplashScreen} from '@components';

import {Toast} from './src/app/components/Toast/Toast';
import {
  AudioTrackerPersistenceProvider,
  AuthProvider,
} from './src/app/providers';
import {Router} from './src/app/router/Routes';
import {darkTheme, theme} from './src/app/styles/theme';
import {QueueManager} from './src/repositories/queueManager';

global.Buffer = require('buffer').Buffer;

setAudioTrackerImpl(trackPlayerImpl());
setFileSystemImpl(expoFsImpl());
setDatabaseImpl(realmImpl);

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode
    ? darkTheme.colors.bgMain
    : theme.colors.bgMain;

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    netStatus.getConnectionStatus();
    await database.open();
    await QueueManager.syncEntities();
    BootSplash.hide();
  };

  if (visible) {
    return (
      <AnimatedSplashScreen
        onInitializeApp={initializeApp}
        onFinish={() => setVisible(false)}
      />
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        <SafeAreaProvider style={{flex: 1, backgroundColor}}>
          <GestureHandlerRootView style={{flex: 1}}>
            <AuthProvider>
              <StatusBar
                backgroundColor={backgroundColor}
                barStyle={isDarkMode ? 'default' : 'dark-content'}
              />
              <Router />
              <Toast />
              <AudioTrackerPersistenceProvider />
            </AuthProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
