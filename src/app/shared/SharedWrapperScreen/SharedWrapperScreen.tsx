import React from 'react';
import {ScrollView} from 'react-native';

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
  scrollEnabled?: boolean;
}

export function SharedWrapperScreen({
  children,
  goBack,
  showLogo,
  scrollEnabled,
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
      <WrapperScreen scrollEnabled={!!scrollEnabled}>
        {showLogo && (
          <SharedScreenHeader
            showLogo={showLogo}
            headerLeft={headerLeft}
            headerTitle={headerTitle}
            headerRight={headerRight}
          />
        )}

        {renderHeader && !showLogo && (
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
      </WrapperScreen>
    </Box>
  );
}

function WrapperScreen({
  children,
  scrollEnabled,
}: React.PropsWithChildren & {scrollEnabled: boolean}) {
  if (scrollEnabled) {
    return (
      <ScrollView
        nestedScrollEnabled
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: 'flex-start',
        }}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    );
  }

  return (
    <Box flex={1} width={'100%'} height={'100%'} justifyContent="center">
      {children}
    </Box>
  );
}
