import React from 'react';

import {Box, BoxProps, Text} from '@components';
import {useAppSafeArea} from '@hooks';

type Props = {
  headerLeft?: React.JSX.Element;
  headerTitle?: string;
  headerRight?: React.JSX.Element;
};

export function SharedScreenHeader({
  headerLeft,
  headerTitle,
  headerRight,
}: Props) {
  const {top} = useAppSafeArea();

  if (!headerLeft && !headerRight && !headerTitle) {
    return null;
  }
  return (
    <Box {...$boxWrapper} style={{marginTop: top}}>
      <Box flex={0.5}>{headerLeft && headerLeft}</Box>
      {headerTitle && (
        <Box flex={2} flexDirection="row" justifyContent="center">
          <Text
            text={headerTitle}
            preset="medium/16"
            setColorsTheme={{dark: 'white', light: 'neutral80'}}
          />
        </Box>
      )}

      <Box flex={0.5} alignItems="flex-end" justifyContent="center">
        {headerRight && headerRight}
      </Box>
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  width: '100%',
  height: 50,
  flexDirection: 'row',
  paddingHorizontal: 'sp25',
  justifyContent: 'space-between',
  alignItems: 'center',
};
