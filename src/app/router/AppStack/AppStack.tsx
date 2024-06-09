import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  PlayerControllerScreen,
  ProfileScreen,
  SettingsScreen,
  SyncScreen,
} from '@screens';

import {AppStackParamList} from '../AppStack/types';
import {AppTabNavigator} from '../AppTabNavigator/AppTabNavigator';

const Stack = createNativeStackNavigator<AppStackParamList>();

type Props = {
  initialRouteName?: keyof AppStackParamList;
};

export function AppStack({initialRouteName = 'SyncScreen'}: Props) {
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
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="SyncScreen" component={SyncScreen} />
    </Stack.Navigator>
  );
}
