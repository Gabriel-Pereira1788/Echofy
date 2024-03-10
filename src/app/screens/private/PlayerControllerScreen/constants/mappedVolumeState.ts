import {IconMappedKey} from '@components';

export type KeyVolumeState = 'up' | 'down' | 'mute';

export const mappedIconVolumeState: Record<KeyVolumeState, IconMappedKey> = {
  up: 'volumeUp',
  down: 'volumeDown',
  mute: 'volumeOff',
};

export const mappedNextVolumeState: Record<
  KeyVolumeState,
  {nextState: KeyVolumeState; nextValue: number}
> = {
  up: {nextState: 'down', nextValue: 0.5},
  down: {nextState: 'mute', nextValue: 0},
  mute: {nextState: 'up', nextValue: 1},
};
