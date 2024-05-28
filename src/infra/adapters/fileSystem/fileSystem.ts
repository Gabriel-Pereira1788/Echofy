import {expoFsImpl} from './implementation/expo-fs-impl';
import {FileSystemImpl} from './types';

export let fileSystem: FileSystemImpl = expoFsImpl;

export function setFileSystemImpl(fileSystemImpl: FileSystemImpl) {
  fileSystem = fileSystemImpl;
}
