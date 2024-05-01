import {trackPlayerImpl} from './implementation';
import {AudioTrackerImpl} from './types';

export let audioTracker = trackPlayerImpl();

export const setAudioTrackerImpl = (audioTrackerImpl: AudioTrackerImpl) => {
  audioTracker = audioTrackerImpl;
};
