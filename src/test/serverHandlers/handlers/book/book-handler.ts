import {BASE_URL} from '@api';
import {HttpResponse, http} from 'msw';

import {bookCategoryMock} from './mock/categoryMock';

export const bookHandler = [
  http.get(`${BASE_URL}book/categories`, () => {
    return HttpResponse.json(bookCategoryMock, {status: 200});
  }),
];
