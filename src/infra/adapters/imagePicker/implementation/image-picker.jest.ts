import {ImageAsset, ImagePickerImpl} from '../types';

const mockImageAsset: ImageAsset = {
  fileName: 'file.jpg',
  fileSize: 100,
  type: 'jpg',
  uri: 'file://file.jpg',
  base64: 'XY6CY20SASD',
};
export const imagePickerJest: ImagePickerImpl = {
  openLibrary: jest.fn(async () => mockImageAsset),
};
