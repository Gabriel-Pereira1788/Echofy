import {audioTracker} from '@infra';

import {useMappedStatesChanged} from '@hooks';

import {
  KeyVolumeState,
  mappedNextVolumeState,
} from '../constants/mappedVolumeState';

export function useVolumeState() {
  const {currentState, handleChangeState} = useMappedStatesChanged<
    KeyVolumeState,
    number
  >({
    initialState: 'up',
    mappedNextStates: mappedNextVolumeState,
    onChanged: async volume => {
      await audioTracker.setVolume(volume);
    },
  });

  return {
    volumeState: currentState,
    changeVolumeState: handleChangeState,
  };
}
