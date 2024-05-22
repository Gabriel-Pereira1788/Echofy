import {useBookGetChapter, useBookUpdateLocalChapter} from '@domain';
import {Track} from '@infra';
import {useDownload} from '@services';

type Props = {
  track: Track | null;
  onFinish: () => void;
  onStart: () => void;
  onProgress: (progress: number) => void;
};
export function useChapterDownload({
  track,
  onFinish,
  onStart,
  onProgress,
}: Props) {
  const {data} = useBookGetChapter(track?.bookId, track?.chapterNumber);
  const {updateLocalChapter} = useBookUpdateLocalChapter();

  const {downloadFile, pause, resume} = useDownload({
    url: track?.url,
    onStart: onStart,
    onProgress: onProgress,
    onSuccess: uri => {
      if (!track?.bookId) {
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
    onError: () => {},
  });

  return {
    download: downloadFile,
    pause,
    resume,
  };
}
