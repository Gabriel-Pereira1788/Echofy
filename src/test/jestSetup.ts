import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import 'react-native-gesture-handler/jestSetup';

import {setDatabaseImpl} from '../database';
import {databaseJest} from '../database/implementation/jest/databaseJest';
import {setAudioTrackerImpl} from '../infra/adapters/audioTracker';
import {audioTrackerJest} from '../infra/adapters/audioTracker/implementation/audio-tracker-jest-impl';
import {setFileSystemImpl} from '../infra/adapters/fileSystem';
import {jestFsImpl} from '../infra/adapters/fileSystem/implementation/jest-fs-impl';
import {setImagePickerImpl} from '../infra/adapters/imagePicker';
import {imagePickerJest} from '../infra/adapters/imagePicker/implementation/image-picker.jest';

import {authCredentialsMock} from './serverHandlers';

setAudioTrackerImpl(audioTrackerJest);
setDatabaseImpl(databaseJest);
setFileSystemImpl(jestFsImpl);
setImagePickerImpl(imagePickerJest);

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

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
    useHideAnimation: jest.fn(() => ({
      container: {
        onLayout: jest.fn(),
        style: {
          alignItems: 'center',
          backgroundColor: '#F5F5FA',
          bottom: 0,
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        },
      },
      logo: {
        fadeDuration: 0,
        onLoadEnd: jest.fn(),
        resizeMode: 'contain',
        source: 3,
        style: {height: 118, width: 250},
      },
      brand: {source: 0},
    })),
  };
});

jest.mock('reactotron-react-native', () => ({
  configure: jest.fn(() => ({
    useReactNative: jest.fn(),
    connect: jest.fn(),
  })),
}));
