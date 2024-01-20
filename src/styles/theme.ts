import {createTheme} from '@shopify/restyle';

export const pallete = {
  accent50: '#F77A55',
  accent60: '#D4553E',
  primary5: '#F3F1FE',
  primary10: '#BBB1FA',
  primary20: '#BBB1FA',
  primary30: '#9487F1',
  primary40: '#7466E3',
  primary50: '#4838D1',
  primary60: '#3528B3',
  primary70: '#261C96',
  primary80: '#191179',
  primary90: '#100A64',
  primary100: '#090638',
  neutral5: '#F5F5FA',
  neutral40: '#B8B8C7',
  neutral80: '#2E2E5D',
  black: '#000000',
  white: '#ffffff',
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
    neutral40: pallete.neutral40,
    neutral80: pallete.neutral80,

    black: pallete.black,
    white: pallete.white,
  },
  spacing: {
    sp7: 7,

    sp10: 10,
    sp16: 16,
    sp15: 15,
    sp20: 20,
    sp25: 25,
    sp28: 28,
    sp50: 50,
  },
  borderRadii: {
    rd4: 4,
    rd8: 8,
  },
});

export type Theme = typeof theme;
