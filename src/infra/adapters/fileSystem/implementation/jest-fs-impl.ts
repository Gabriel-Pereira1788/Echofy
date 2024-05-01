import {FileSystemImpl} from '../types';

const download = jest.fn();
export const jestFsImpl = (): FileSystemImpl => ({
  download,
});
