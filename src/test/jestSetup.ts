import {darkTheme, theme} from '@styles';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));
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

jest.mock('react-native-track-player', () => {
  return {
    useProgress: () => ({
      position: 0,
      duration: 0,
    }),
    addEventListener: jest.fn(),
    registerEventHandler: jest.fn(),
    registerPlaybackService: jest.fn(),
    setupPlayer: jest.fn(),
    destroy: jest.fn(),
    updateOptions: jest.fn(),
    add: jest.fn(),
    remove: jest.fn(),
    skip: jest.fn(),
    skipToNext: jest.fn(),
    skipToPrevious: jest.fn(),
    removeUpcomingTracks: jest.fn(),
    Event: {
      PlaybackState: 'playback-state',
      PlaybackActiveTrackChanged: 'playback-active-track-changed',
      MetadataCommonReceived: 'metadata-common-received',
      PlaybackError: 'playback-error',
    },
    // playback commands
    reset: jest.fn(),
    play: jest.fn(),
    pause: jest.fn(),
    stop: jest.fn(),
    seekTo: jest.fn(),
    setVolume: jest.fn(),
    setRate: jest.fn(),
    // player getters
    getQueue: jest.fn(),
    getTrack: jest.fn(),
    getCurrentTrack: jest.fn(),
    getVolume: jest.fn(),
    getDuration: jest.fn(),
    getPosition: jest.fn(),
    getBufferedPosition: jest.fn(),
    getState: jest.fn(),
    getRate: jest.fn(),
  };
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
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
export const mockedGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedGoBack,
    }),
  };
});
