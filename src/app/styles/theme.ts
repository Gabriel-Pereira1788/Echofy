import {createTheme} from '@shopify/restyle';

import {pallete} from './pallete';

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
    neutral40: pallete.neutral40,
    neutral80: pallete.neutral80,
    black: pallete.black,
    white: pallete.white,

    bgInput: pallete.neutral5,
    bgMain: pallete.white,
    contrast: pallete.neutral5,

    activeColor: pallete.primary50,
    unactiveColor: pallete.primary85,

    base: pallete.white,

    alertColor: pallete.primary80,

    textActive: pallete.primary50,
    textAuthor: pallete.primary50,
    buttonText: pallete.primary50,
    placeHolderTextColor: pallete.neutral40,
    text: pallete.black,
    border: pallete.primary50,
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
    sp50: 50,
  },
  borderRadii: {
    rd4: 4,
    rd8: 8,
    rd12: 12,
    rd15: 15,
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
    unactiveColor: pallete.primary85,

    base: pallete.black,

    alertColor: pallete.primary20,

    textActive: pallete.primary20,
    textAuthor: pallete.neutral10,

    buttonText: pallete.white,
    placeHolderTextColor: pallete.neutral60,
    text: pallete.white,
    border: pallete.white,
  },
});
