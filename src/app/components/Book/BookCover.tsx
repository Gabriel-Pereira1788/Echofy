import React, {Suspense} from 'react';
import {ActivityIndicator, Image} from 'react-native';

import {Theme} from '@styles';

import {useTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';

type Props = {
  height: number | '100%';
  uri: string;
  disabledShadowBox?: boolean;
  radius?: keyof Theme['borderRadii'];
};

export function BookCover({
  height,
  uri,
  disabledShadowBox = false,
  radius,
}: Props) {
  const theme = useTheme();

  const _shadowBox = disabledShadowBox ? undefined : $shadowBox;
  const _radius = radius ? theme.borderRadii[radius] : 4;
  return (
    <Box
      height={height}
      width={'100%'}
      backgroundColor="transparent"
      borderRadius="rd15"
      {..._shadowBox}>
      <Suspense fallback={<ActivityIndicator size={10} />}>
        <Image
          testID="book-image"
          style={{width: '100%', height: '100%', borderRadius: _radius}}
          source={{
            uri,
          }}
          resizeMode="stretch"
        />
      </Suspense>
    </Box>
  );
}

const $shadowBox: BoxProps = {
  shadowOpacity: 0.53,
  shadowRadius: 2.62,
  elevation: 4,
  shadowColor: 'black',
  shadowOffset: {
    width: 0,
    height: 2,
  },
};
