import React from 'react';

import {database} from '@database';
import {useAuthContext} from '@providers';
import {SharedWrapperScreen} from '@shared';

import {Button, Text} from '@components';

export function ProfileScreen() {
  const {removeCredentials} = useAuthContext();

  async function signOut() {
    await removeCredentials();
    await database.reset();
  }
  return (
    <SharedWrapperScreen>
      <Text text="profile screen" color="base" />
      <Button text="Sign out" onPress={signOut} />
    </SharedWrapperScreen>
  );
}
