import {createTheme} from '@shopify/restyle';
import {ViewStyle} from 'react-native/types';

import {pallete} from './pallete';

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: -3,
  },
  shadowOpacity: 0.05,
  shadowRadius: 12,
};

export const theme = createTheme({
  colors: {
    accent50: pallete.accent50,
    accent60: pallete.accent60,
    primary5: pallete.primary5,
    primary10: pallete.primary10,
    primary20: pallete.primary20,
    primary30: pallete.primary30,
    primary40: pallete.primary40,
    primary50: pallete.primary50,
    primary60: pallete.primary60,
    primary70: pallete.primary70,
    primary80: pallete.primary80,
    primary90: pallete.primary90,
    primary100: pallete.primary100,
    neutral5: pallete.neutral5,
    neutral10: pallete.neutral10,
    neutral20: pallete.neutral20,
    neutral40: pallete.neutral40,
    neutral50: pallete.neutral50,
    neutral60: pallete.neutral60,
    neutral80: pallete.neutral80,
    error: pallete.redError,
    success: pallete.greenSuccess,
    black: pallete.black,
    white: pallete.white,
    transparent: 'rgba(0,0,0,0.5)',
    bgInput: pallete.neutral5,
    bgMain: pallete.white,
    contrast: pallete.neutral5,

    activeColor: pallete.primary50,
    unactiveColor: pallete.neutral60,

    base: pallete.black,
    baseIconColor: pallete.primary50,

    alertColor: pallete.primary80,

    outlineCategoryColor: pallete.neutral60,

    shadowCommonColor: pallete.neutral100,

    playerButtonColor: pallete.neutral80,
    textActive: pallete.primary50,
    textAuthor: pallete.primary50,
    buttonText: pallete.primary50,
    placeHolderTextColor: pallete.neutral40,
    text: pallete.black,
    border: pallete.primary50,

    carouselBackground: pallete.neutral20,
    carouselSelected: pallete.primary50,

    borderCommonColor: pallete.primary5,
  },
  spacing: {
    sp3: 3,
    sp7: 7,

    sp10: 10,
    sp16: 16,
    sp15: 15,
    sp20: 20,
    sp23: 23,
    sp25: 25,
    sp28: 28,
    sp40: 40,
    sp48: 48,
    sp50: 50,
    sp60: 60,
  },
  borderRadii: {
    rd4: 4,
    rd8: 8,
    rd12: 12,
    rd15: 15,
    rd40: 40,
    rd100: 100,
  },
});

export type Theme = typeof theme;

export const darkTheme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,

    bgInput: pallete.neutral90,
    bgMain: pallete.neutral100,

    contrast: pallete.neutral80,

    activeColor: pallete.grayLight,
    unactiveColor: pallete.primary20,

    base: pallete.white,
    baseIconColor: pallete.white,

    shadowCommonColor: pallete.primary30,

    playerButtonColor: pallete.primary20,

    alertColor: pallete.primary20,
    outlineCategoryColor: pallete.white,

    textActive: pallete.primary20,
    textAuthor: pallete.neutral10,

    buttonText: pallete.white,
    placeHolderTextColor: pallete.neutral60,
    text: pallete.white,
    border: pallete.white,

    carouselBackground: pallete.neutral80,
    carouselSelected: pallete.accent50,

    borderCommonColor: pallete.neutral80,
  },
});
