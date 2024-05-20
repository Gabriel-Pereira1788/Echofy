import React from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {usePlayerStore} from '@services';
import {Theme} from '@styles';

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
  playerSpacingEnabled?: boolean;
  scrollProps?: ScrollViewProps;
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
  scrollProps,
  playerSpacingEnabled = true,
}: Props) {
  const navigation = useNavigation();
  const player = usePlayerStore();

  const {bottom} = useAppSafeArea();
  function handleGoBack() {
    navigation.goBack();
  }

  const $marginBottom: keyof Theme['spacing'] | undefined =
    player && playerSpacingEnabled ? 'sp80' : undefined;

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
      <WrapperScreen scrollEnabled={!!scrollEnabled} scrollProps={scrollProps}>
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
          marginBottom={$marginBottom}
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
  scrollProps,
}: React.PropsWithChildren & {
  scrollEnabled: boolean;
  scrollProps?: ScrollViewProps;
}) {
  if (scrollEnabled) {
    return (
      <ScrollView
        nestedScrollEnabled
        bounces={false}
        scrollEventThrottle={16}
        style={{flex: 1}}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-start',
        }}
        showsVerticalScrollIndicator={false}
        {...scrollProps}>
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
