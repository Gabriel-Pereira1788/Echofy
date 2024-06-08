import React from 'react';
import {Image} from 'react-native';

import {images} from '@assets';
import {useNavigation} from '@react-navigation/native';
import {SharedWrapperScreen} from '@shared';

import {Box, Button, Text} from '@components';
import {useTheme} from '@hooks';

type Props = {};

export function ErrorScreen({}: Props) {
  const {colorScheme} = useTheme();
  const navigation = useNavigation();

  const $source =
    colorScheme === 'dark'
      ? images.errorIllustrationDark
      : images.errorIllustrationLight;

  return (
    <SharedWrapperScreen goBack>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="flex-start"
        width={'100%'}>
        <Image
          source={$source}
          style={{width: 260, height: 260}}
          resizeMode="contain"
        />

        <Box gap="sp16" alignItems="center" width={'100%'} padding="sp10">
          <Text text="Ops, Something Went Wrong" preset="semiBold/16" />
          <Text
            text="Please check your internet connection and try again."
            preset="regular/14"
          />
          <Box width={'100%'} marginTop="sp20">
            <Button text="Retry" type="outline" onPress={navigation.goBack} />
          </Box>
        </Box>
      </Box>
    </SharedWrapperScreen>
  );
}
