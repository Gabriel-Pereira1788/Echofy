import React from 'react';

import {AuthProvider} from '@providers';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {darkTheme, theme} from '@styles';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Toast} from '@components';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
};

function wrapAllProviders() {
  const queryClient = new QueryClient(queryClientConfig);

  const isDarkMode = false;
  return ({children}: React.PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
function wrapperProvidersScreen() {
  const queryClient = new QueryClient(queryClientConfig);

  return ({children}: React.PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <NavigationContainer>{children}</NavigationContainer>
            <Toast />
          </AuthProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

export function renderScreen<T>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: wrapperProvidersScreen(), ...options});
}

export function customRender<T>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: wrapAllProviders(), ...options});
}
export function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) {
  return renderHook(renderCallback, {wrapper: wrapAllProviders(), ...options});
}
export * from '@testing-library/react-native';

export {customRenderHook as renderHook};
export {customRender as render};
export {
  fireGestureHandler,
  getByGestureTestId,
} from 'react-native-gesture-handler/jest-utils';
