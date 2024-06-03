/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {realmImpl, setDatabaseImpl} from '@database';
import {
  expoFsImpl,
  queryClient,
  setAudioTrackerImpl,
  setFileSystemImpl,
  trackPlayerImpl,
} from '@infra';
import {InitializeHandler, settingsService, useAppColor} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {useAppColorScheme} from '@hooks';

import {Toast} from './src/app/components/Toast/Toast';
import {
  AudioTrackerPersistenceProvider,
  AuthProvider,
} from './src/app/providers';
import {Router} from './src/app/router/Routes';
import {darkTheme, theme} from './src/app/styles/theme';

global.Buffer = require('buffer').Buffer;

setAudioTrackerImpl(trackPlayerImpl);
setFileSystemImpl(expoFsImpl);
setDatabaseImpl(realmImpl);

function App(): React.JSX.Element {
  const appColor = useAppColor();
  useAppColorScheme();

  const isDarkMode = appColor === 'dark';
  const backgroundColor = isDarkMode
    ? darkTheme.colors.bgMain
    : theme.colors.bgMain;

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <AuthProvider>
      <InitializeHandler>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
            <SafeAreaProvider style={{flex: 1, backgroundColor}}>
              <GestureHandlerRootView style={{flex: 1}}>
                <StatusBar
                  backgroundColor={backgroundColor}
                  barStyle={isDarkMode ? 'default' : 'dark-content'}
                />
                <Router />
                <Toast />
                <AudioTrackerPersistenceProvider />
              </GestureHandlerRootView>
            </SafeAreaProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </InitializeHandler>
    </AuthProvider>
  );
}

export default App;
