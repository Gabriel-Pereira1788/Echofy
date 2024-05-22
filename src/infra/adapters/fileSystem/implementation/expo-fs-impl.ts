import {
  documentDirectory,
  createDownloadResumable,
} from 'expo-file-system/src/FileSystem';

import {DownloadConfig, FileSystemImpl, IDownloadResumable} from '../types';

const download = async (
  config: DownloadConfig,
): Promise<IDownloadResumable> => {
  const downloadResumable = await createDownloadResumable(
    config.url,
    documentDirectory + 'small.mp3',
    {},
    downloadProgress => {
      const progress =
        downloadProgress.totalBytesWritten /
        downloadProgress.totalBytesExpectedToWrite;
      config.callbackProgress(progress);
    },
  );

  return {
    init: async () => {
      const result = await downloadResumable.downloadAsync();
      return result?.uri;
    },
    pause: async () => {
      await downloadResumable.pauseAsync();
    },
    resume: async () => {
      const result = await downloadResumable.resumeAsync();
      return result?.uri;
    },
  };
};
export const expoFsImpl = (): FileSystemImpl => ({
  download,
});
