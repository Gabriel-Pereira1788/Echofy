import {useBookGetChapter, useBookUpdateLocalChapter} from '@domain';
import {Track} from '@infra';
import {useDownload} from '@services';

type Props = {
  track: Track | null;
  onFinish: () => void;
  onStart: () => void;
  onProgress: (progress: number) => void;
  onError?: () => void;
};
export function useChapterDownload({
  track,
  onFinish,
  onStart,
  onProgress,
  onError,
}: Props) {
  const {data} = useBookGetChapter(track?.bookId, track?.chapterNumber);
  const {updateLocalChapter} = useBookUpdateLocalChapter({
    onError,
  });

  const {downloadFile, pause, resume} = useDownload({
    url: track?.url,
    onStart: onStart,
    onProgress: onProgress,
    onSuccess: uri => {
      if (!track?.bookId || !data) {
        return;
      }
      updateLocalChapter(track?.bookId, {
        playlistChapters: [
          {
            src: data!.src,
            chapter: data?.chapter! ?? 0,
            localSrc: uri,
          },
        ],
      });

      onFinish();
    },
    onError: onError,
  });

  return {
    hasDownloaded: !!data?.localSrc,
    download: downloadFile,
    pause,
    resume,
  };
}
