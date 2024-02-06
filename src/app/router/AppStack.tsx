import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BookScreen, CategoryBookScreen, ProfileScreen} from '@screens';

import {AppTabNavigator, AppTabParamList} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabParamList>;

  BookScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  CategoryBookScreen: {categoryIdentify: string};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />

      <Stack.Screen name="BookScreen" component={BookScreen} />
      <Stack.Screen name="CategoryBookScreen" component={CategoryBookScreen} />
    </Stack.Navigator>
  );
}
