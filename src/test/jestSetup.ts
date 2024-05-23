import {setDatabaseImpl} from '@database';
import {
  setAudioTrackerImpl,
  setFileSystemImpl,
  setImagePickerImpl,
} from '@infra';
import {darkTheme, theme} from '@styles';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import {databaseJest} from '../database/implementation/jest/databaseJest';
import {audioTrackerJest} from '../infra/adapters/audioTracker/implementation/audio-tracker-jest-impl';
import {jestFsImpl} from '../infra/adapters/fileSystem/implementation/jest-fs-impl';
import {imagePickerJest} from '../infra/adapters/imagePicker/implementation/image-picker.jest';

import {authCredentialsMock} from './serverHandlers';

setAudioTrackerImpl(audioTrackerJest);
setDatabaseImpl(databaseJest);
setFileSystemImpl(jestFsImpl());
setImagePickerImpl(imagePickerJest);

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
    getActiveTrackIndex: jest.fn(),
    getActiveTrack: jest.fn(),
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

const mockUid = authCredentialsMock.id;
const mockCredentials = authCredentialsMock;
export const mockRefreshCredentials = jest.fn();
jest.mock('@providers', () => {
  const originalModule = jest.requireActual('@providers');
  return {
    ...originalModule,
    useAuthContext: () => ({
      uid: mockUid,
      credentials: mockCredentials,
      refreshCredentials: mockRefreshCredentials,
      removeCredentials: jest.fn(),
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

jest.mock('expo-file-system/src/FileSystem', () => {
  return {
    documentDirectory: 'file://document',
    createDownloadResumable: jest.fn(() => {
      return {
        downloadAsync: () => ({uri: 'file://link/file'}),
        pauseAsync: jest.fn(),
        resumeAsync: () => ({uri: 'file://link/file'}),
      };
    }),
  };
});

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn(),
}));

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);

jest.mock('../app/services/permission/permissionService', () => ({
  permissionService: {
    request: jest.fn(),
    check: jest.fn(() => 'granted'),
  },
}));
jest.setTimeout(30000);

jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: jest.fn(),
  fetch: jest.fn(),
  addEventListener: jest.fn(),
}));

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockResolvedValue(true),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn().mockReturnValue({
      container: {},
      logo: {source: 0},
      brand: {source: 0},
    }),
  };
});
