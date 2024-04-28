import {BASE_URL} from '@api';
import {HttpResponse, http} from 'msw';

import {reviewMock} from './mock/reviewMock';

export const reviewHandler = [
  http.get(`${BASE_URL}review/find-by-book-id/:bookId`, () => {
    return HttpResponse.json(reviewMock, {status: 200});
  }),
];
