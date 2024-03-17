import {Track, audioTracker} from '@infra';

export function useAudioTrackActions() {
  async function initialize(tracks: Track[]) {
    await audioTracker.reset();
    await audioTracker.addTracks(tracks);
    await audioTracker.play();
  }

  return {
    initialize,
  };
}
