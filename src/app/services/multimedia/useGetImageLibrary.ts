import {useState} from 'react';

import {ImageAsset, imagePicker} from '@infra';

import {usePermission} from '../permission';

export function useGetImageLibrary() {
  const [image, setImage] = useState<ImageAsset | null>(null);

  const {status} = usePermission('photoLibrary');

  async function pickImage() {
    try {
      if (status === 'granted') {
        const imageAsset = await imagePicker.openLibrary();

        setImage(imageAsset);
      }
    } catch (err) {
      console.log('ERROR ON PICK IMAGE', err);
    }
  }

  return {
    image,
    pickImage,
  };
}
