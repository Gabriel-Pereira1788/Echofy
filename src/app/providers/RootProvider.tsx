import React from 'react';

import {queryClient} from '@infra';
import {BaseTheme, ThemeProvider} from '@shopify/restyle';
import {QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {InitializeHandler} from '../services/initialize';

import {AuthProvider} from './AuthProvider';

interface RootProps extends React.PropsWithChildren {
  theme: BaseTheme;
  backgroundColor: string;
}

export function RootProvider({children, theme, backgroundColor}: RootProps) {
  return (
    <AuthProvider>
      <InitializeHandler>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <SafeAreaProvider style={{flex: 1, backgroundColor}}>
              <GestureHandlerRootView style={{flex: 1}}>
                {children}
              </GestureHandlerRootView>
            </SafeAreaProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </InitializeHandler>
    </AuthProvider>
  );
}
