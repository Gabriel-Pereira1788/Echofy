import React from 'react';

import {dimensions} from '@utils';

import {Box, Image, Text, TouchableOpacityBox} from '@components';

type Props = {
  showLogo?: boolean;
  headerLeft?: React.JSX.Element;
  headerTitle?: string;
  headerRight?: React.JSX.Element;
};

export function SharedScreenHeader({
  headerLeft,
  showLogo,
  headerTitle,
  headerRight,
}: Props) {
  const dynamicLogoSize = (dimensions.width / 100) * 35;
  const alignItems = showLogo ? 'center' : 'flex-start';

  return (
    <Box
      width={'100%'}
      height={50}
      flexDirection="row"
      paddingHorizontal="sp25"
      justifyContent="space-between"
      alignItems={alignItems}>
      {headerLeft ||
        (showLogo && (
          <Box>
            {showLogo ? (
              <Image
                imageName="logo"
                width={dynamicLogoSize}
                height={dynamicLogoSize}
              />
            ) : (
              headerLeft
            )}
          </Box>
        ))}
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
