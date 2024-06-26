import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  TouchableOpacityBox,
  BoxProps,
  ITouchableOpacityBoxProps,
  Text,
  Icon,
  Box,
  MinimizePlayer,
} from '@components';

import {useAppSafeArea} from '../../helpers/hooks/useAppSafeArea';
import {$shadowProps} from '../../styles/theme';
import {AppTabParamList} from '../AppTabNavigator/types';

import {mapScreenToProps} from './mapScreenProps';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();
  return (
    <>
      <MinimizePlayer />
      <Box
        width={'100%'}
        position="relative"
        style={[{minHeight: bottom, paddingBottom: bottom}, $shadowProps]}
        backgroundColor="bgMain">
        <Box {...$boxWrapper}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];

            const tabItem =
              mapScreenToProps[route.name as keyof AppTabParamList];

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({name: route.name, merge: true} as any);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacityBox
                key={index}
                {...$itemWrapper}
                accessibilityState={isFocused ? {selected: true} : {}}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{flex: 1}}>
                <Box marginBottom="sp3">
                  <Icon
                    size={'sp23'}
                    type={isFocused ? 'bold' : 'light'}
                    iconName={tabItem.iconName}
                    color={isFocused ? 'activeColor' : 'unactiveColor'}
                  />
                </Box>
                <Text
                  text={tabItem.label}
                  align="center"
                  preset="medium/10"
                  color={isFocused ? 'activeColor' : 'unactiveColor'}
                />
              </TouchableOpacityBox>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

const $itemWrapper: Omit<ITouchableOpacityBoxProps, 'children'> = {
  activeOpacity: 1,
  accessibilityRole: 'button',
  boxProps: {
    alignItems: 'center',
    backgroundColor: 'bgMain',
  },
};

const $boxWrapper: BoxProps = {
  paddingTop: 'sp7',
  backgroundColor: 'bgMain',
  flexDirection: 'row',
};
