import {BASE_URL} from '@api';
import {HttpResponse, http} from 'msw';

import {bookMockApi} from './mock/bookMock';
import {bookCategoryMock} from './mock/categoryMock';

export const bookHandler = [
  http.get('http://127.0.0.1:49361/', () => {
    return HttpResponse.json(null, {status: 200});
  }),
  http.get(`${BASE_URL}book/get-books`, () => {
    return HttpResponse.json(
      {...bookMockApi, page: 2, totalPages: 2},
      {status: 200},
    );
  }),
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

    return HttpResponse.json(bookMockApi, {status: 200});
  }),
  http.get(`${BASE_URL}book/best-seller`, () => {
    return HttpResponse.json(bookMockApi, {status: 200});
  }),
  http.get(`${BASE_URL}book/find-by-text/:searchText`, ({params}) => {
    const searchText = params.searchText as string;

    if (searchText.trim() === '') {
      return HttpResponse.json(
        {
          docs: [],
          nextPage: null,
          page: 0,
          prevPage: null,
          totalDocs: 0,
          totalPages: 0,
        },
        {status: 200},
      );
    }
    const booksFiltered = bookMockApi.docs.filter(book =>
      book.book_title.includes(searchText as string),
    );

    const result = {...bookMockApi, docs: booksFiltered};
    return HttpResponse.json(result, {status: 200});
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
    return HttpResponse.json(bookMockApi, {status: 200});
  }),
  http.get(`${BASE_URL}book/find-book/:id`, ({params}) => {
    const bookId =
      params && params.id !== 'testID' ? params.id : bookMockApi.docs[0].id;
    const bookData = bookMockApi.docs.find(_book => _book.id === bookId);

    return HttpResponse.json(bookData, {status: 200});
  }),
];
