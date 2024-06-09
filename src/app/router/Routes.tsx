import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {StackRouter} from './StackRouter';

type Props = {};

export function Router({}: Props) {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}
