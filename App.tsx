/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {realmImpl, setDatabaseImpl} from '@database';
import {
  expoFsImpl,
  setAudioTrackerImpl,
  setFileSystemImpl,
  trackPlayerImpl,
} from '@infra';
import {settingsService, useAppColor} from '@services';

import {useAppColorScheme} from '@hooks';

import {Toast} from './src/app/components/Toast/Toast';
import {
  AudioTrackerPersistenceProvider,
  RootProvider,
} from './src/app/providers';
import {Router} from './src/app/router/Routes';
import {darkTheme, theme} from './src/app/styles/theme';

global.Buffer = require('buffer').Buffer;

setAudioTrackerImpl(trackPlayerImpl);
setFileSystemImpl(expoFsImpl);
setDatabaseImpl(realmImpl);

function App(): React.JSX.Element {
  const appColor = useAppColor();
  useAppColorScheme();

  const isDarkMode = appColor === 'dark';
  const backgroundColor = isDarkMode
    ? darkTheme.colors.bgMain
    : theme.colors.bgMain;

  useEffect(() => {
    settingsService.handleStatusBar(appColor);
  }, [appColor]);

  return (
    <RootProvider
      theme={isDarkMode ? darkTheme : theme}
      backgroundColor={backgroundColor}>
      <StatusBar
        backgroundColor={backgroundColor}
        barStyle={isDarkMode ? 'default' : 'dark-content'}
      />
      <Router />
      <Toast />
      <AudioTrackerPersistenceProvider />
    </RootProvider>
  );
}

export default App;
