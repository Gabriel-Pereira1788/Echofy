import React from 'react';
import {Image} from 'react-native';

import {Box, Icon, IconPress} from '@components';

type Props = {
  profileImageUri?: string;
  pickImage: () => Promise<void>;
};
export function ProfileImage({profileImageUri, pickImage}: Props) {
  return (
    <Box
      width={200}
      height={200}
      overflow="hidden"
      borderRadius="rd15"
      alignItems="center"
      justifyContent="center"
      position="relative"
      backgroundColor="contrast">
      <Box position="absolute" right={5} top={5} zIndex={1}>
        <IconPress
          iconName="penSquare"
          color="baseIconColor"
          size="sp28"
          hitSlop={20}
          onPress={pickImage}
        />
      </Box>
      {profileImageUri ? (
        <Image
          source={{
            uri: profileImageUri,
          }}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      ) : (
        <Icon color="baseIconColor" iconName="avatar" size="sp60" />
      )}
    </Box>
  );
}
