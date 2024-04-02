import React from 'react';

import {AppStackProps} from '@router';
import {SharedWrapperScreen} from '@shared';

import {IconPress, Text} from '@components';

export function ReadBookScreen({navigation}: AppStackProps<'ReadBookScreen'>) {
  function goBack() {
    navigation.goBack();
  }
  return (
    <SharedWrapperScreen
      headerTitle={'Read Book Screen'}
      headerLeft={
        <IconPress
          testID="go-back-player-controller"
          iconName="arrowDown"
          size="sp20"
          color="baseIconColor"
          onPress={goBack}
        />
      }>
      <Text text="Read Book SCREEN" />
    </SharedWrapperScreen>
  );
}
