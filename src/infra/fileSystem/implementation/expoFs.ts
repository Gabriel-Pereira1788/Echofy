import {
  documentDirectory,
  createDownloadResumable,
} from 'expo-file-system/src/FileSystem';

import {FileSystemImpl} from '../types';

const download: FileSystemImpl['download'] = async config => {
  const dir = documentDirectory;
  console.log('DIR-', dir);
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

  const result = await downloadResumable.downloadAsync();

  return {
    uri: result?.uri,
    pause: async () => {
      await downloadResumable.pauseAsync();
    },
    resume: async () => {
      await downloadResumable.resumeAsync();
    },
  };
};
export const expoFs: FileSystemImpl = {
  download,
};
