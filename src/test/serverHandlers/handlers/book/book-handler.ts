import {BASE_URL} from '@api';
import {HttpResponse, http} from 'msw';

import {bookMock} from './mock/bookMock';
import {bookCategoryMock} from './mock/categoryMock';

export const bookHandler = [
  http.get(`${BASE_URL}book/categories`, () => {
    return HttpResponse.json(bookCategoryMock, {status: 200});
  }),

  http.get(`${BASE_URL}book/recommended-for-you/:uid`, ({params}) => {
    const uid = params.uid;

    if (!uid) {
      return new HttpResponse(
        {message: 'Something is wrong.'},
        {
          status: 404,
        },
      );
    }

    return HttpResponse.json(bookMock, {status: 200});
  }),
  http.get(`${BASE_URL}book/best-seller`, () => {
    return HttpResponse.json(bookMock, {status: 200});
  }),
  http.get(`${BASE_URL}book/find-by-category/:category`, ({params}) => {
    const category = params.category;

    if (!category) {
      return new HttpResponse(
        {message: 'incorrectly category.'},
        {
          status: 404,
        },
      );
    }

    return HttpResponse.json(bookMock, {status: 200});
  }),
];
