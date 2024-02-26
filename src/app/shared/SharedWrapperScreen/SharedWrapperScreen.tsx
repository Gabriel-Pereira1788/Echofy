import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, TouchableOpacityBox} from '@components';

import {SharedScreenHeader} from '../SharedScreenHeader/SharedScreenHeader';

interface Props extends React.PropsWithChildren {
  showLogo?: boolean;
  goBack?: boolean;
  headerLeft?: React.JSX.Element;
  headerTitle?: string;
  headerRight?: React.JSX.Element;
  customPadding?: boolean;
}

export function SharedWrapperScreen({
  children,
  goBack,
  showLogo,
  headerLeft,
  headerRight,
  customPadding,
  headerTitle,
}: Props) {
  const navigation = useNavigation();
  function handleGoBack() {
    navigation.goBack();
  }

  const renderHeader = headerLeft || headerRight || headerTitle || goBack;
  return (
    <Box
      width={'100%'}
      flex={1}
      height={'100%'}
      justifyContent="center"
      backgroundColor="bgMain">
      {showLogo && (
        <SharedScreenHeader
          showLogo={showLogo}
          headerLeft={headerLeft}
          headerTitle={headerTitle}
          headerRight={headerRight}
        />
      )}

      {renderHeader && (
        <SharedScreenHeader
          headerTitle={headerTitle}
          headerLeft={
            <TouchableOpacityBox onPress={handleGoBack} testID="go-back">
              <Icon iconName="arrowLeft" color="baseIconColor" size="sp23" />
            </TouchableOpacityBox>
          }
        />
      )}
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        width="100%"
        padding={customPadding ? undefined : 'sp25'}>
        {children}
      </Box>
    </Box>
  );
}
