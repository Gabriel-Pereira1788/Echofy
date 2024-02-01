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
  const dynamicLogoSize = (dimensions.width / 100) * 40;

  return (
    <Box
      width={'100%'}
      height={100}
      flexDirection="row"
      paddingHorizontal="sp25"
      justifyContent="space-between"
      alignItems="center">
      {headerLeft ||
        (showLogo && (
          <TouchableOpacityBox
            boxProps={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}>
            {showLogo ? (
              <Image
                imageName="logo"
                width={dynamicLogoSize}
                height={dynamicLogoSize}
              />
            ) : (
              headerLeft
            )}
          </TouchableOpacityBox>
        ))}
      {headerTitle && (
        <TouchableOpacityBox
          boxProps={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            text={headerTitle}
            preset="medium/16"
            setColorsTheme={{dark: 'white', light: 'neutral80'}}
          />
        </TouchableOpacityBox>
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
