import {AudioTrackerImpl} from '.';

export let audioTracker: AudioTrackerImpl;

export const setAudioTrackerImpl = (audioTrackerImpl: AudioTrackerImpl) => {
  audioTracker = audioTrackerImpl;
};
