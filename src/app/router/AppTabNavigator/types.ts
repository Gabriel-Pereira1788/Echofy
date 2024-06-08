import {NavigatorScreenParams} from '@react-navigation/native';
import {CategoryIdentify} from '@repositories';

export type AppTabParamList = {
  HomeStackNavigator: NavigatorScreenParams<CommonStackParamList>;
  SearchStackNavigator: NavigatorScreenParams<CommonStackParamList>;
  LibraryScreen: NavigatorScreenParams<CommonStackParamList>;
};

export type CommonStackParamList = {
  MainScreen: undefined;
  BookDetailsScreen: {id: string};
  BookReviewPanel: {bookId: string; bookTitle: string};
  NewReviewScreen: {bookId: string};
  CategoryBookScreen: {
    categoryIdentify: CategoryIdentify;
    categoryTitle: string;
  };
};
