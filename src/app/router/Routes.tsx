import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {useAuthContext} from '../providers/AuthProvider';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

type Props = {};

export function Router({}: Props) {
  const {credentials} = useAuthContext();
  return (
    <NavigationContainer>
      {!credentials || credentials?.firstLogin ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
