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

export type AuthStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
  WelcomeScreen: {uid: string};
  ReadyToGoScreen: {selectedCategories: BookCategory[]};
  PersonalizationScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
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
