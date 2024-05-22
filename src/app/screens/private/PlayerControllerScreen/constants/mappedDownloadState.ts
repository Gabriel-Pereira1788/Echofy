import {IconMappedKey} from '@components';

export type State = 'started' | 'paused' | 'finish';
export const mappedDownloadState: Record<State, IconMappedKey | undefined> = {
  started: 'pause',
  paused: 'play',
  finish: undefined,
};
