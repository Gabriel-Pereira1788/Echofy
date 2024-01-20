import {api, audioBookApi} from './audioBook-api';

async function refreshToken() {
  const response = await audioBookApi.getAuthorization();

  api.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${response.access_token}`;
  console.log('credentials spotify', response);
}

async function getList() {
  const response = await audioBookApi.get();
  console.log('getlist', response);
}

async function getPlaylistTracker() {}

export const audioBookService = {
  refreshToken,
  getList,
};
