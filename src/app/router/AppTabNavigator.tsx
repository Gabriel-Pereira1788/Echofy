import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {HomeScreen, LibraryScreen, SearchScreen} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  LibraryScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Tab.Screen name="BookScreen" component={BookScreen} /> */}
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="LibraryScreen" component={LibraryScreen} />
    </Tab.Navigator>
  );
}
