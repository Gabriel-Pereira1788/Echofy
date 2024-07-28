import {audioTracker} from '@infra';
import {useNavigation} from '@react-navigation/native';
import {usePlayerActions} from '@services';

export function usePlayerController() {
  const navigation = useNavigation();
  const playerActions = usePlayerActions();

  async function onPlay() {
    await audioTracker.play();
    playerActions.changeStatus('play');
  }

  async function onPause() {
    await audioTracker.pause();
    playerActions.changeStatus('pause');
  }

  async function closeTracker() {
    try {
      navigation.goBack();
      await audioTracker.reset();
      await audioTracker.setVolume(1);
      playerActions.hide();
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  return {
    onPause,
    onPlay,
    closeTracker,
  };
}
