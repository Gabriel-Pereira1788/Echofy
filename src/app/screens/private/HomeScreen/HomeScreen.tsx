import React from 'react';

import {SharedWrapperScreen} from '@shared';

import {Button, Text} from '@components';
import {useAuthContext} from '@providers';

export function HomeScreen() {
  const {removeCredentials} = useAuthContext();
  return (
    <SharedWrapperScreen>
      <Text text="HomeScreen" />
      <Button text="sign out" onPress={removeCredentials} />
    </SharedWrapperScreen>
  );
}
