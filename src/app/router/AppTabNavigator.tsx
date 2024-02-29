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
import {CommonStackProps} from './navigation';

export type AppTabParamList = {
  HomeStackNavigator: NavigatorScreenParams<CommonStackParamList>;
  SearchScreen: undefined;
  LibraryScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export type CommonStackParamList = {
  MainScreen: undefined;
  CategoryBookScreen: {
    categoryIdentify: CategoryIdentify;
    categoryTitle: string;
  };
};

const Stack = createStackNavigator<CommonStackParamList>();
function createCommonStackNavigator(
  MainRouteComponent: (props: CommonStackProps<'MainScreen'>) => JSX.Element,
) {
  return () => (
    <Stack.Navigator
      initialRouteName={'MainScreen'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'MainScreen'} component={MainRouteComponent} />
      <Stack.Screen name="CategoryBookScreen" component={CategoryBookScreen} />
    </Stack.Navigator>
  );
}

const HomeScreenStack = createCommonStackNavigator(HomeScreen);
const SearchScreenStack = createCommonStackNavigator(SearchScreen);

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
      <Tab.Screen name="HomeStackNavigator" component={HomeScreenStack} />
      <Tab.Screen name="SearchScreen" component={SearchScreenStack} />
      <Tab.Screen name="LibraryScreen" component={LibraryScreen} />
    </Tab.Navigator>
  );
}
