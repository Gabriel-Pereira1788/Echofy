import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {dimensions} from '@utils';

import {Box, Icon, Image, TouchableOpacityBox} from '@components';

import {
  SharedScreenHeader,
  SharedScreenHeaderProps,
} from '../SharedScreenHeader/SharedScreenHeader';

interface Props extends Pick<SharedScreenHeaderProps, 'disabledMarginTop'> {}

export function SharedBrandHeader({disabledMarginTop}: Props) {
  const dynamicLogoSize = (dimensions.width / 100) * 35;

  const navigation = useNavigation();

  function redirectToSettingsScreen() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <SharedScreenHeader
      disabledMarginTop={disabledMarginTop}
      headerRight={
        <TouchableOpacityBox
          onPress={redirectToSettingsScreen}
          testID="profile-button">
          <Icon iconName="settings" size="sp23" color="baseIconColor" />
        </TouchableOpacityBox>
      }
      headerLeft={
        <Box testID="brand">
          <Image
            imageName="logo"
            width={dynamicLogoSize}
            height={dynamicLogoSize}
          />
        </Box>
      }
    />
  );
}
