import {rnImagePicker} from './implementation';
import {ImagePickerImpl} from './types';

export let imagePicker: ImagePickerImpl = rnImagePicker;

export function setImagePickerImpl(imagePickerImpl: ImagePickerImpl) {
  imagePicker = imagePickerImpl;
}
