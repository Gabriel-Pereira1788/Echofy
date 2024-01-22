import React from 'react';

import {AuthProvider} from '@providers';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@styles';
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from '@tanstack/react-query';
import {RenderOptions, render} from '@testing-library/react-native';

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

function wrapperProvidersScreen() {
  const queryClient = new QueryClient(queryClientConfig);

  return ({children}: React.PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          {children}
          <Toast />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export function renderScreen<T>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: wrapperProvidersScreen(), ...options});
}

export * from '@testing-library/react-native';
