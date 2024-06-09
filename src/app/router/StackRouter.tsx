import React, {useEffect, useState} from 'react';

import {StorageKeys, storage} from '@infra';

import {useAuthContext} from '../providers/AuthProvider';
import {useShowOnboarding} from '../services/settings';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {OnboardingStack} from './OnboardingStack';

type Props = {};

export function StackRouter({}: Props) {
  const [haveBeenSynced, setHaveBeenSynced] = useState(true);
  const showOnBoarding = useShowOnboarding();
  const {credentials} = useAuthContext();

  useEffect(() => {
    onHaveBeenSynced();
  }, []);

  async function onHaveBeenSynced() {
    const _haveBeenSynced = (await storage.getItem(
      StorageKeys.SyncBooks,
    )) as boolean;

    setHaveBeenSynced(_haveBeenSynced);
  }
  if (showOnBoarding) {
    return <OnboardingStack />;
  }

  if (credentials && !credentials.firstLogin) {
    return (
      <AppStack
        initialRouteName={haveBeenSynced ? 'AppTabNavigator' : 'SyncScreen'}
      />
    );
  }

  return <AuthStack />;
}
