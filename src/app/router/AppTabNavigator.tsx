import React from 'react';

import {CategoryIdentify} from '@domain';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  BookReviewPanel,
  CategoryBookScreen,
  DetailsBookScreen,
  HomeScreen,
  LibraryScreen,
  SearchScreen,
} from '@screens';

import {AppTabBar} from './AppTabBar';
import {CommonStackProps} from './navigation';

export type AppTabParamList = {
  HomeStackNavigator: NavigatorScreenParams<CommonStackParamList>;
  SearchStackNavigator: NavigatorScreenParams<CommonStackParamList>;
  LibraryScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export type CommonStackParamList = {
  MainScreen: undefined;
  DetailsBookScreen: {id: string};
  BookReviewPanel: {bookId: string};
  CategoryBookScreen: {
    categoryIdentify: CategoryIdentify;
    categoryTitle: string;
  };
};

const Stack = createStackNavigator<CommonStackParamList>();

export function createCommonStackNavigator(
  MainRouteComponent: (props: CommonStackProps<'MainScreen'>) => JSX.Element,
  initialRouteName: keyof CommonStackParamList = 'MainScreen',
) {
  return () => (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'MainScreen'} component={MainRouteComponent} />
      <Stack.Screen name="CategoryBookScreen" component={CategoryBookScreen} />
      <Stack.Screen name="DetailsBookScreen" component={DetailsBookScreen} />
      <Stack.Screen name="BookReviewPanel" component={BookReviewPanel} />
    </Stack.Navigator>
  );
}

const HomeScreenStack = createCommonStackNavigator(HomeScreen);
const SearchScreenStack = createCommonStackNavigator(SearchScreen);

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
      <Tab.Screen name="LibraryScreen" component={LibraryScreen} />
    </Tab.Navigator>
  );
}
