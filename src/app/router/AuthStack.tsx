import React from 'react';

import {BookCategory} from '@domain';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  PersonalizationScreen,
  ReadyToGoScreen,
  SignInScreen,
  SignUpScreen,
} from '@screens';

import {WelcomeScreen} from '../screens/auth/Welcome/WelcomeScreen';
import ErrorScreen from '../screens/public/ErrorScreen/ErrorScreen';

export type AuthStackParamList = {
  ErrorScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  WelcomeScreen: {uid: string};
  ReadyToGoScreen: {selectedCategories: BookCategory[]};
  PersonalizationScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack({
  initialRouteName = 'SignInScreen',
}: {
  initialRouteName?: keyof AuthStackParamList;
}) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen
        name="ErrorScreen"
        component={ErrorScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />

      <Stack.Screen
        name="PersonalizationScreen"
        component={PersonalizationScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="ReadyToGoScreen"
        component={ReadyToGoScreen}
        options={{
          headerTransparent: true,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}
