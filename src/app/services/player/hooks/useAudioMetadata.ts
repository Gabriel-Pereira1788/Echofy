import {useEffect, useState} from 'react';

import {TrackMetadata, audioTracker} from '@infra';

export function useAudioMetadata() {
  const [metadata, setMetadata] = useState<TrackMetadata | null>(null);

  useEffect(() => {
    audioTracker.setEventListener('trackChanged', _metadata => {
      setMetadata(_metadata);
    });

    return;
  }, []);

  return metadata;
}
