import React from 'react';
import {Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

type Props = {
  profileImageUri?: string;
  profileName: string;
};

export function ProfileSection({profileImageUri, profileName}: Props) {
  const navigation = useNavigation();

  function redirectToProfileScreen() {
    navigation.navigate('ProfileScreen');
  }

  return (
    <Box
      width={'100%'}
      flexDirection="row"
      alignItems="center"
      borderTopWidth={1}
      borderTopColor="contrast"
      gap="sp20"
      marginTop="sp20"
      paddingTop="sp28"
      paddingHorizontal="sp28"
      justifyContent="flex-start">
      <Box
        width={72}
        height={72}
        style={{borderRadius: 140}}
        backgroundColor="contrast"
        alignItems="center"
        justifyContent="center">
        {profileImageUri ? (
          <Image source={{uri: profileImageUri}} />
        ) : (
          <Box testID="icon-avatar">
            <Icon color="baseIconColor" iconName="avatar" size="sp40" />
          </Box>
        )}
      </Box>
      <Box width={'80%'} gap="sp10">
        <Text text={profileName} preset="medium/16" />
        <TouchableOpacityBox onPress={redirectToProfileScreen}>
          <Text text="View Profile" color="primary50" />
        </TouchableOpacityBox>
      </Box>
    </Box>
  );
}
