import React from 'react';

import {Box, Text, TouchableOpacityBox} from '@components';

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
  return (
    <Box
      width={'100%'}
      height={50}
      flexDirection="row"
      paddingHorizontal="sp25"
      justifyContent="space-between"
      alignItems={'center'}>
      {headerLeft && headerLeft}
      {headerTitle && (
        <Box flex={1} flexDirection="row" justifyContent="center">
          <Text
            text={headerTitle}
            preset="medium/16"
            setColorsTheme={{dark: 'white', light: 'neutral80'}}
          />
        </Box>
      )}

      {headerRight && (
        <TouchableOpacityBox
          boxProps={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          {headerRight}
        </TouchableOpacityBox>
      )}
    </Box>
  );
}
