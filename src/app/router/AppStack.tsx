import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BookScreen} from '@screens';
export type AppStackParamList = {
  BookScreen: undefined;
};
const Stack = createNativeStackNavigator();
export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignInScreen"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="BookScreen" component={BookScreen} />
    </Stack.Navigator>
  );
}
