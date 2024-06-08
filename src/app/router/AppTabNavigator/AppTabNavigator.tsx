import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeScreen, LibraryScreen, SearchScreen} from '@screens';

import {AppTabBar} from '../AppTabBar/AppTabBar';

import {createCommonStackNavigator} from './createCommonStackNavigator';
import {AppTabParamList} from './types';

const Tab = createBottomTabNavigator<AppTabParamList>();

const HomeScreenStack = createCommonStackNavigator(HomeScreen);
const SearchScreenStack = createCommonStackNavigator(SearchScreen);
const LibraryScreenStack = createCommonStackNavigator(LibraryScreen);

type Props = {
  initialRouteName?: keyof AppTabParamList;
};

export function AppTabNavigator({
  initialRouteName = 'HomeStackNavigator',
}: Props) {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeStackNavigator" component={HomeScreenStack} />
      <Tab.Screen name="SearchStackNavigator" component={SearchScreenStack} />
      <Tab.Screen name="LibraryScreen" component={LibraryScreenStack} />
    </Tab.Navigator>
  );
}
