import {useMappedStatesChanged} from '@hooks';

import {
  KeySpeedState,
  mappedNextSpeedState,
} from '../constants/mappedSpeedState';

export function useSpeedState(
  onSpeedControl: (speed: number) => Promise<void>,
) {
  const {currentState, handleChangeState} = useMappedStatesChanged<
    KeySpeedState,
    number
  >({
    initialState: 'normal',
    mappedNextStates: mappedNextSpeedState,
    onChanged: async value => {
      await onSpeedControl(value);
    },
  });

  return {
    speedState: currentState,
    changeSpeedState: handleChangeState,
  };
}
