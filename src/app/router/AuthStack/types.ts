import {BookCategory} from '@domain';

export type AuthStackParamList = {
  ErrorScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  WelcomeScreen: {uid: string};
  ReadyToGoScreen: {selectedCategories: BookCategory[]};
  PersonalizationScreen: undefined;
};
