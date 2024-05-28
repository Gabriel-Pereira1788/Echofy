import {DownloadConfig, FileSystemImpl} from '../types';

const download = jest.fn(async (config: DownloadConfig) => {
  setTimeout(() => {
    config.callbackProgress(0.5);
  }, 1000);

  return {
    init: jest.fn(async () => {
      return new Promise<string>(resolve => {
        setTimeout(() => {
          resolve('file://storage/file.mpe');
        }, 3000);
      });
    }),
    pause: jest.fn(),
    resume: jest.fn(),
  };
});
export const jestFsImpl: FileSystemImpl = {
  download,
};
