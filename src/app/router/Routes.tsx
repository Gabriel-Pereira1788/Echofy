import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {Stacks, useStackRouter} from './hooks';
import {OnboardingStack} from './OnboardingStack';

type Props = {};

const mappedStacks: Record<Stacks, React.ReactElement> = {
  App: <AppStack />,
  Auth: <AuthStack />,
  Onboarding: <OnboardingStack />,
};
export function Router({}: Props) {
  const stack = useStackRouter();
  return <NavigationContainer>{mappedStacks[stack]}</NavigationContainer>;
}
