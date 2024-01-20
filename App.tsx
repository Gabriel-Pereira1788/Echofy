/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {SignInScreen} from './src/screens';
import {theme} from './src/styles/theme';
import {ThemeProvider} from '@shopify/restyle';
import {Router} from './src/router/Routes';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@infra';

global.Buffer = require('buffer').Buffer;
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Router />
        </SafeAreaView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
