import React, {useEffect} from 'react';

import {StorageKeys, Track, audioTracker, storage} from '@infra';

audioTracker.setupPlayer();

export function AudioTrackerPersistenceProvider() {
  async function persistTrackData() {
    const currentTracks = audioTracker.getTracks();

    const trackData = await storage.getItem<{
      currentIndex: number;
      tracks: Track[];
    }>(StorageKeys.TrackPersistence);

    const persistedPosition = await storage.getItem<number>(
      StorageKeys.TrackProgressPersistence,
    );

    if (
      trackData &&
      trackData.tracks.length > 0 &&
      currentTracks.length === 0
    ) {
      console.log('tracks', trackData);
      await initialize(trackData.tracks);
      await audioTracker.skipTo(trackData.currentIndex);
      await audioTracker.seekTo(persistedPosition);
      await audioTracker.pause();
    }
  }

  async function initialize(tracks: Track[]) {
    await audioTracker.reset();
    await audioTracker.addTracks(tracks);
    await audioTracker.play();
  }
  useEffect(() => {
    persistTrackData();
    audioTracker.setEventListener('trackChanged', _metadata => {
      if (_metadata) {
        storage.setItem(StorageKeys.TrackPersistence, {
          currentIndex: _metadata.currentIndex,
          tracks: audioTracker.getTracks(),
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
}
