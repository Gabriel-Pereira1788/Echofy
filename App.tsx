/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {queryClient} from '@infra';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClientProvider} from '@tanstack/react-query';

import {Toast} from './src/app/components/Toast/Toast';
import {AuthProvider} from './src/app/providers';
import {Router} from './src/app/router/Routes';
import {theme} from './src/app/styles/theme';

global.Buffer = require('buffer').Buffer;
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <Router />
            <Toast />
          </SafeAreaView>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
