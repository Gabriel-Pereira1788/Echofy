import {IconProps} from '../components/Icon/iconTypes';

import {AppTabParamList} from './AppStack';

export type MappedScreenProps = Record<
  keyof AppTabParamList,
  {
    iconName: IconProps['iconName'];
    label: string;
  }
>;

export const mapScreenToProps: MappedScreenProps = {
  HomeScreen: {
    iconName: 'home',
    label: 'Home',
  },
  SearchScreen: {
    iconName: 'search',
    label: 'Search',
  },
  LibraryScreen: {
    iconName: 'document',
    label: 'Library',
  },
};
