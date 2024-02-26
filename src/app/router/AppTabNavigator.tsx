import React from 'react';

import {CategoryIdentify} from '@domain';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CategoryBookScreen,
  HomeScreen,
  LibraryScreen,
  SearchScreen,
} from '@screens';

import {AppTabBar} from './AppTabBar';

export type AppTabParamList = {
  HomeStackNavigator: NavigatorScreenParams<HomeStackParamList>;
  SearchScreen: undefined;
  LibraryScreen: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  CategoryBookScreen: {
    categoryIdentify: CategoryIdentify;
    categoryTitle: string;
  };
};
const Tab = createBottomTabNavigator<AppTabParamList>();

const Stack = createStackNavigator<HomeStackParamList>();
export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CategoryBookScreen" component={CategoryBookScreen} />
    </Stack.Navigator>
  );
}

export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      initialRouteName="HomeStackNavigator"
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
      {/* <Tab.Screen name="BookScreen" component={BookScreen} /> */}
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="LibraryScreen" component={LibraryScreen} />
    </Tab.Navigator>
  );
}
