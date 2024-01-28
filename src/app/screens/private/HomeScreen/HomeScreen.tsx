import React from 'react';

import {useAuthContext} from '@providers';
import {SharedWrapperScreen} from '@shared';

import {Button, Text} from '@components';

export function HomeScreen() {
  const {removeCredentials} = useAuthContext();
  return (
    <SharedWrapperScreen>
      <Text text="HomeScreen" />
      <Button text="sign out" onPress={removeCredentials} />
    </SharedWrapperScreen>
  );
}
