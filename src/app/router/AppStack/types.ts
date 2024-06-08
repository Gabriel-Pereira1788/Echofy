import {NavigatorScreenParams} from '@react-navigation/native';

import {AppTabParamList} from '../AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabParamList>;
  ProfileScreen: undefined;
  PlayerControllerScreen: undefined;
  SettingsScreen: undefined;
};
