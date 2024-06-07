/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerPlaybackService = () => require('./services.js');

if (__DEV__) {
  require('./src/infra/config/reactotronConfig');
}
