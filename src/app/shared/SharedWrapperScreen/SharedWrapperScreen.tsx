import React from 'react';
import {ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, TouchableOpacityBox} from '@components';
import {useAppSafeArea} from '@hooks';

import {SharedScreenHeader} from '../SharedScreenHeader/SharedScreenHeader';

interface Props extends React.PropsWithChildren {
  goBack?: boolean;
  headerLeft?: React.JSX.Element;
  headerTitle?: string;
  headerRight?: React.JSX.Element;
  footerElement?: React.JSX.Element;
  customPadding?: boolean;
  scrollEnabled?: boolean;
}

export function SharedWrapperScreen({
  children,
  goBack,
  scrollEnabled,
  headerLeft,
  headerRight,
  footerElement,
  customPadding,
  headerTitle,
}: Props) {
  const navigation = useNavigation();
  const {bottom} = useAppSafeArea();
  function handleGoBack() {
    navigation.goBack();
  }

  const _headerLeft =
    headerLeft && !goBack ? (
      headerLeft
    ) : (
      <TouchableOpacityBox onPress={handleGoBack} testID="go-back">
        <Icon iconName="arrowLeft" color="baseIconColor" size="sp23" />
      </TouchableOpacityBox>
    );
  return (
    <Box
      width={'100%'}
      flex={1}
      height={'100%'}
      justifyContent="center"
      backgroundColor="bgMain">
      <WrapperScreen scrollEnabled={!!scrollEnabled}>
        <SharedScreenHeader
          headerTitle={headerTitle}
          headerLeft={headerLeft || goBack ? _headerLeft : undefined}
          headerRight={headerRight}
        />

        <Box
          flex={1}
          alignItems="center"
          justifyContent="center"
          width="100%"
          padding={customPadding ? undefined : 'sp25'}>
          {children}
        </Box>
      </WrapperScreen>
      {footerElement && (
        <Box style={{marginBottom: bottom}} width="100%">
          {footerElement}
        </Box>
      )}
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
          flexGrow: 1,
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
