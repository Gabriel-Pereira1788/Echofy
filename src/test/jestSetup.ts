import {darkTheme, theme} from '@styles';

let mockColorScheme = 'light';
let mockTheme = theme;

export const setColorSchemeMock = (mode: 'dark' | 'light') => {
  mockColorScheme = mode;

  if (mode === 'dark') {
    mockTheme = darkTheme;
  } else {
    mockTheme = theme;
  }
};
jest.mock('@hooks', () => {
  const originalImports = jest.requireActual('@hooks');
  return {
    ...originalImports,
    useTheme: () => ({
      ...mockTheme,
      colorScheme: mockColorScheme,
    }),
  };
});

export const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});
