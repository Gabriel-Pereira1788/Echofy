import {ImageAsset} from '@infra';

async function generateImageUri(imageAsset: ImageAsset) {
  const myHeaders = new Headers();
  const clientId = '644950fed2082ab';
  myHeaders.append('Authorization', `Client-ID ${clientId}`);
  const formData = new FormData();

  formData.append('image', imageAsset.base64);
  formData.append('type', 'base64');
  formData.append('title', 'Simple upload');
  formData.append('description', 'This is a simple image upload in Imgur');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
  };

  const response = await fetch(
    'https://api.imgur.com/3/upload',
    requestOptions,
  );

  const result = (await response.json()) as {data: {link: string}};

  return result && result.data.link ? result.data.link : null;
}

export const multimediaService = {
  generateImageUri,
};
