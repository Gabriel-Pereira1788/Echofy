import {BASE_URL} from '@api';
import {HttpResponse, http} from 'msw';

import {favoriteDataMock} from './mock/favoriteDataMock';

// favorites/get-favorite-data
export const favoritesHandler = [
  http.get(`${BASE_URL}favorites/get-favorite-data/:uid/:bookId`, () => {
    return HttpResponse.json(null, {status: 200});
  }),
  http.get(`${BASE_URL}favorites/get-favorites/:uid`, () => {
    return HttpResponse.json(favoriteDataMock, {status: 200});
  }),
  http.post(`${BASE_URL}favorites/send-to-favorites/:uid/:bookId`, () => {
    return HttpResponse.json(favoriteDataMock.docs[0], {status: 200});
  }),
  http.delete(`${BASE_URL}favorites/remove-to-favorites/:id`, () => {
    return HttpResponse.json(favoriteDataMock.docs[0], {status: 200});
  }),
];
