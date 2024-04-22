import {FileSystemImpl} from './types';

export let fileSystem: FileSystemImpl;

export function setFileSystemImpl(fileSystemImpl: FileSystemImpl) {
  fileSystem = fileSystemImpl;
}
