import {useEffect} from 'react';

import {StorageKeys, storage, useProgress} from '@infra';
import {secondsToMinutesFormatter} from '@utils';

export function useTrackPlayerProgress() {
  const progress = useProgress();

  const percentageProgress =
    progress.duration > 0 ? (progress.position / progress.duration) * 100 : 0;

  const minutesDuration = secondsToMinutesFormatter(progress.duration);
  const minutesPosition = secondsToMinutesFormatter(progress.position);

  useEffect(() => {
    if (progress.position) {
      storage.setItem(StorageKeys.TrackProgressPersistence, progress.position);
    }
  }, [progress.position]);

  return {
    position: progress.position,
    duration: progress.duration,
    minutesDuration,
    minutesPosition,
    percentageProgress: percentageProgress,
  };
}
