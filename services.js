const {
  default: TrackPlayer,
  AppKilledPlaybackBehavior,
} = require('react-native-track-player');

module.exports = async function () {
  try {
    TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
      },
    });
    TrackPlayer.addEventListener('remote-play', () => {
      TrackPlayer.play();
    });

    TrackPlayer.addEventListener('remote-pause', () => {
      TrackPlayer.pause();
    });

    TrackPlayer.addEventListener('remote-next', () => {
      TrackPlayer.skipToNext();
    });

    TrackPlayer.addEventListener('remote-previous', () => {
      TrackPlayer.skipToPrevious();
    });

    TrackPlayer.addEventListener('remote-stop', () => {
      TrackPlayer.destroy();
    });
  } catch (error) {}
};
