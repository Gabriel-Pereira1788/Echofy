import {useRef} from 'react';

import {IDownloadResumable, fileSystem} from '@infra';

interface Props {
  url?: string;
  onProgress: (progress: number) => void;
  onStart?: () => void;
  onSuccess?: (uri: string) => void;
  onError?: (message: string) => void;
}
export function useDownload({
  url,
  onProgress,
  onSuccess,
  onError,
  onStart,
}: Props) {
  const downloadResumable = useRef<IDownloadResumable>();

  async function downloadFile() {
    try {
      if (!url) {
        throw new Error('Url undefined');
      }
      const _downloadResumable = await fileSystem.download({
        url,
        callbackProgress: onProgress,
      });

      downloadResumable.current = _downloadResumable;

      onStart?.();
      const uri = await _downloadResumable.init();
      if (onSuccess && uri) {
        onSuccess(uri);
      }
    } catch (error) {
      console.log('Error on download file', error);

      if (onError) {
        onError('Error on download');
      }
    }
  }

  async function pause() {
    await downloadResumable.current?.pause();
  }

  async function resume() {
    const uri = await downloadResumable.current?.resume();
    if (onSuccess && uri) {
      onSuccess(uri);
    }
  }
  return {
    downloadFile,
    pause,
    resume,
  };
}
