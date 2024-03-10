import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PlayerControllerScreen, ProfileScreen} from '@screens';

import {AppTabNavigator, AppTabParamList} from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabParamList>;
  ProfileScreen: undefined;
  PlayerControllerScreen: undefined;
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
      <Stack.Screen
        name="PlayerControllerScreen"
        options={{
          animation: 'slide_from_bottom',
          customAnimationOnGesture: true,
        }}
        component={PlayerControllerScreen}
      />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
