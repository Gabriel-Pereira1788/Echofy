/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {queryClient} from '@infra';
import {TrackPlayerController} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from './src/app/components/Toast/Toast';
import {AuthProvider} from './src/app/providers';
import {Router} from './src/app/router/Routes';
import {darkTheme, theme} from './src/app/styles/theme';

global.Buffer = require('buffer').Buffer;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundColor = isDarkMode
    ? darkTheme.colors.bgMain
    : theme.colors.bgMain;
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        <SafeAreaProvider style={{flex: 1, backgroundColor}}>
          <GestureHandlerRootView style={{flex: 1}}>
            <AuthProvider>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              />
              <Router />
              <Toast />
              <TrackPlayerController />
            </AuthProvider>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
