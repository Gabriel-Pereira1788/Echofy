import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {
  BookDetailsScreen,
  BookReviewPanel,
  CategoryBookScreen,
  NewReviewScreen,
} from '@screens';

import {CommonStackProps} from '../navigation';

import {CommonStackParamList} from './types';

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
