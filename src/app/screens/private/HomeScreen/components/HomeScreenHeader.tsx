import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {SharedScreenHeader} from '@shared';

import {Icon, TouchableOpacityBox} from '@components';

import {HomeScreenCategories} from './HomeScreenCategories';

type Props = {};

export function HomeScreenHeader({}: Props) {
  const navigation = useNavigation();
  function redirectToProfileScreen() {
    navigation.navigate('ProfileScreen');
  }
  return (
    <>
      <SharedScreenHeader
        showLogo
        headerRight={
          <TouchableOpacityBox
            onPress={redirectToProfileScreen}
            testID="profile-button">
            <Icon iconName="settings" size="sp23" color="baseIconColor" />
          </TouchableOpacityBox>
        }
      />

      <HomeScreenCategories />
    </>
  );
}
