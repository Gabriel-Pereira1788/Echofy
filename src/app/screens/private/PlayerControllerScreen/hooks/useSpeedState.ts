import {audioTracker} from '@infra';

import {useMappedStatesChanged} from '@hooks';

import {
  KeySpeedState,
  mappedNextSpeedState,
} from '../constants/mappedSpeedState';

export function useSpeedState() {
  const {currentState, handleChangeState} = useMappedStatesChanged<
    KeySpeedState,
    number
  >({
    initialState: 'normal',
    mappedNextStates: mappedNextSpeedState,
    onChanged: async value => {
      await audioTracker.setRate(value);
    },
  });

  return {
    speedState: currentState,
    changeSpeedState: handleChangeState,
  };
}
