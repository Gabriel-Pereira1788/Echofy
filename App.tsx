/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {
  database,
  queryClient,
  realmImpl,
  setAudioTrackerImpl,
  setDatabaseImpl,
  trackPlayer,
} from '@infra';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from './src/app/components/Toast/Toast';
import {AuthProvider} from './src/app/providers';
import {Router} from './src/app/router/Routes';
import {AudioTrackerPersistenceProvider} from './src/app/services';
import {darkTheme, theme} from './src/app/styles/theme';

global.Buffer = require('buffer').Buffer;

setAudioTrackerImpl(trackPlayer);
setDatabaseImpl(realmImpl);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode
    ? darkTheme.colors.bgMain
    : theme.colors.bgMain;

  useEffect(() => {
    handleInitializeDatabase();
  }, []);

  const handleInitializeDatabase = async () => {
    await database.open();
  };
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
