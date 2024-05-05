import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

import {ImageAsset, ImagePickerImpl} from '../types';

const options: ImageLibraryOptions = {
  mediaType: 'photo',
  includeBase64: true,
  quality: 0.5,
};
async function openLibrary(): Promise<ImageAsset | null> {
  const response = await launchImageLibrary(options);

  if (response.errorMessage) {
    throw new Error(response.errorMessage);
  }
  const asset = response.assets ? response.assets[0] : null;

  if (asset) {
    return asset;
  } else {
    return null;
  }
}

export const rnImagePicker: ImagePickerImpl = {
  openLibrary,
};
