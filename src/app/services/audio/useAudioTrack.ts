import {useEffect, useState} from 'react';

import {Track, audioTracker} from '@infra';

export function useAudioTrack() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    getTrackData();
    audioTracker.setEventListener('trackChanged', _track => {
      console.log('TRIGGER EVENT LISTENER');
      setTrack(_track);
    });

    return;
  }, []);

  async function getTrackData() {
    const currentTrack = await audioTracker.getActiveTrack();
    console.log('[CURRENT-TRACK]', currentTrack);
    if (currentTrack) {
      setTrack(currentTrack);
    }
  }
  return track;
}
