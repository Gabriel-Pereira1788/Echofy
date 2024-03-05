import React from 'react';
import {Image, Modal} from 'react-native';

import {SharedWrapperScreen} from '@shared';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../TouchableOpacityBox/TouchableOpacityBox';

type Props = {
  isOpen: boolean;
  title: string;
  author: string;
  coverURI: string;
  onClose: () => void;
};

export function PlayerModalController({
  title,
  author,
  coverURI,
  isOpen,
  onClose,
}: Props) {
  const $title = title.length > 30 ? title.slice(0, 30) + '...' : title;

  return (
    <Modal visible={isOpen} animationType="slide">
      <SharedWrapperScreen
        headerTitle={$title}
        headerLeft={
          <TouchableOpacityBox activeOpacity={0.8} onPress={onClose}>
            <Icon iconName="arrowLeft" size="sp20" color="baseIconColor" />
          </TouchableOpacityBox>
        }>
        <Box
          width={'90%'}
          height={300}
          alignItems="center"
          justifyContent="center"
          marginVertical="sp25"
          {...$shadowBox}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={{
              uri: coverURI,
            }}
            resizeMode="stretch"
          />
        </Box>

        <Box gap="sp3" width={'100%'} marginTop="sp10">
          <Text text={title} preset="medium/20" />
          <Text
            text={author}
            preset="regular/16"
            setColorsTheme={{
              dark: 'neutral10',
              light: 'neutral50',
            }}
          />
        </Box>
      </SharedWrapperScreen>
    </Modal>
  );
}

const $shadowBox: BoxProps = {
  backgroundColor: 'black',
  borderRadius: 'rd12',
  shadowOpacity: 0.53,
  shadowRadius: 3.62,
  elevation: 6,
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 2,
  },
};
