import axios from 'axios';

import {CredentialsAPI} from './audioBook-types';

const CLIENT_ID = '201f7d16fe244215aa21b99ba2aa5423';
const CLIENT_SECRET = '5cbf5a55510343d589b79b823edc8427';

export const api = axios.create();

async function getAuthorization() {
  const buffer = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString(
    'base64',
  );

  const credentials = await api.post<CredentialsAPI>(
    'https://accounts.spotify.com/api/token',
    {
      grant_type: 'client_credentials',
    },
    {
      headers: {
        Authorization: 'Basic ' + buffer,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return credentials.data;
}

async function get() {
  const response = await api.get('https://api.spotify.com/v1/audiobooks');
  return response.data;
}

export const audioBookApi = {
  getAuthorization,
  get,
};
