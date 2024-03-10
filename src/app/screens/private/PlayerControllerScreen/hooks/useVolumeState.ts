import {useMappedStatesChanged} from '@hooks';

import {
  KeyVolumeState,
  mappedNextVolumeState,
} from '../constants/mappedVolumeState';

export function useVolumeState(
  onVolumeControl: (volume: number) => Promise<void>,
) {
  const {currentState, handleChangeState} = useMappedStatesChanged<
    KeyVolumeState,
    number
  >({
    initialState: 'up',
    mappedNextStates: mappedNextVolumeState,
    onChanged: async volume => {
      await onVolumeControl(volume);
    },
  });

  return {
    volumeState: currentState,
    changeVolumeState: handleChangeState,
  };
}
