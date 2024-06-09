import React, {useEffect} from 'react';

import {AppStackProps} from '@router';
import {initializeService} from '@services';
import {SharedWrapperScreen} from '@shared';

import {Box, Image, Loader, Text} from '@components';

export function SyncScreen({navigation}: AppStackProps<'SyncScreen'>) {
  useEffect(() => {
    onSyncBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSyncBooks() {
    await initializeService.syncBooks();
    navigation.navigate('AppTabNavigator', {
      screen: 'HomeStackNavigator',
      params: {
        initial: true,
        screen: 'MainScreen',
      },
    });
  }
  return (
    <SharedWrapperScreen>
      <Box testID="image-illustration">
        <Image imageName="syncIllustration" height={400} width={350} />
      </Box>
      <Text
        text="Hang tight! We're updating your book collection. This won't take long."
        preset="medium/16"
      />
      <Box testID="loader-element">
        <Loader />
      </Box>
    </SharedWrapperScreen>
  );
}
