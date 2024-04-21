import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PlayerControllerScreen, ProfileScreen, ReadBookScreen} from '@screens';

import {AppTabNavigator, AppTabParamList} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabParamList>;
  ProfileScreen: undefined;
  PlayerControllerScreen: undefined;
  ReadBookScreen: {
    bookId: string;
    readLink: string;
    bookTitle: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

type Props = {
  initialRouteName?: keyof AppStackParamList;
};

export function AppStack({initialRouteName = 'AppTabNavigator'}: Props) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen
        name="PlayerControllerScreen"
        options={{
          animation: 'slide_from_bottom',
          customAnimationOnGesture: true,
        }}
        component={PlayerControllerScreen}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="ReadBookScreen"
        component={ReadBookScreen}
        options={{
          animation: 'slide_from_bottom',
          customAnimationOnGesture: true,
        }}
      />
    </Stack.Navigator>
  );
}
