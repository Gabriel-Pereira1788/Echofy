import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {dimensions} from '@utils';

import {Box, Icon, Image, TouchableOpacityBox} from '@components';

import {SharedScreenHeader} from '../SharedScreenHeader/SharedScreenHeader';

type Props = {};

export function SharedBrandHeader({}: Props) {
  const dynamicLogoSize = (dimensions.width / 100) * 35;

  const navigation = useNavigation();

  function redirectToProfileScreen() {
    navigation.navigate('ProfileScreen');
  }

  return (
    <SharedScreenHeader
      headerRight={
        <TouchableOpacityBox
          onPress={redirectToProfileScreen}
          testID="profile-button">
          <Icon iconName="settings" size="sp23" color="baseIconColor" />
        </TouchableOpacityBox>
      }
      headerLeft={
        <Box>
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
