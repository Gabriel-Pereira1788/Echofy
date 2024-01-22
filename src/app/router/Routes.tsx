import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './AuthStack';

type Props = {};

export function Router({}: Props) {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
