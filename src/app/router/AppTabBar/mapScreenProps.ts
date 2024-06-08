import {IconProps} from '../../components/Icon/iconTypes';
import {AppTabParamList} from '../AppTabNavigator';

export type MappedScreenProps = Record<
  keyof AppTabParamList,
  {
    iconName: IconProps['iconName'];
    label: string;
  }
>;

export const mapScreenToProps: MappedScreenProps = {
  HomeStackNavigator: {
    iconName: 'home',
    label: 'Home',
  },
  SearchStackNavigator: {
    iconName: 'search',
    label: 'Search',
  },
  LibraryScreen: {
    iconName: 'document',
    label: 'Library',
  },
};
