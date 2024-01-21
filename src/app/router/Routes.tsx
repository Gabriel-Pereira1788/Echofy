import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStack} from './AuthStack';

type Props = {};

export function Router({}: Props) {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
