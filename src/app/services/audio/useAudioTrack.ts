import {useEffect, useState} from 'react';

import {Track, audioTracker} from '@infra';

export function useAudioTrack() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    getTrackData();
    audioTracker.setEventListener('trackChanged', _track => {
      setTrack(_track);
    });

    return;
  }, []);

  async function getTrackData() {
    const currentTrack = await audioTracker.getActiveTrack();
    if (currentTrack) {
      setTrack(currentTrack);
    }
  }
  return track;
}
