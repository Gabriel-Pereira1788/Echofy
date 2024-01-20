import {AppStackParamList} from './AppStack';
import {AuthStackParamList} from './AuthStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AuthStackProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppStackProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
