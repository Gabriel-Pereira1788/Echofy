import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  TouchableOpacityBox,
  BoxProps,
  ITouchableOpacityBoxProps,
  TextProps,
  Text,
  Icon,
  Box,
} from '@components';

import {$shadowProps} from '../styles/theme';

import {AppTabParamList} from './AppStack';
import {mapScreenToProps} from './mapScreenProps';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <Box {...$boxWrapper} style={[{paddingBottom: 0}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem = mapScreenToProps[route.name as keyof AppTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
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
            <Icon
              size={'sp23'}
              iconName={tabItem.iconName}
              color={isFocused ? 'activeColor' : 'unactiveColor'}
            />
            <Text
              {...$label}
              color={isFocused ? 'activeColor' : 'unactiveColor'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $label: TextProps = {
  preset: 'medium/10',
};

const $itemWrapper: Omit<ITouchableOpacityBoxProps, 'children'> = {
  activeOpacity: 1,
  accessibilityRole: 'button',
  boxProps: {
    alignItems: 'center',
  },
};

const $boxWrapper: BoxProps = {
  paddingTop: 'sp15',
  backgroundColor: 'bgMain',
  flexDirection: 'row',
};
