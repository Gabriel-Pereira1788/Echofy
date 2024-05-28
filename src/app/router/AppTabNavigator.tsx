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
  BookDetailsScreen,
  HomeScreen,
  LibraryScreen,
  NewReviewScreen,
  SearchScreen,
} from '@screens';

import {AppTabBar} from './AppTabBar';
import {CommonStackProps} from './navigation';

export type AppTabParamList = {
  HomeStackNavigator: NavigatorScreenParams<CommonStackParamList>;
  SearchStackNavigator: NavigatorScreenParams<CommonStackParamList>;
  LibraryScreen: NavigatorScreenParams<CommonStackParamList>;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export type CommonStackParamList = {
  MainScreen: undefined;
  BookDetailsScreen: {id: string};
  BookReviewPanel: {bookId: string; bookTitle: string};
  NewReviewScreen: {bookId: string};
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
      <Stack.Screen name="BookDetailsScreen" component={BookDetailsScreen} />
      <Stack.Screen name="BookReviewPanel" component={BookReviewPanel} />
      <Stack.Screen name="NewReviewScreen" component={NewReviewScreen} />
    </Stack.Navigator>
  );
}

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
