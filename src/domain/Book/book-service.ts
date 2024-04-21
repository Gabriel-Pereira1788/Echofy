import {PaginatedResult} from '@infra';

import {QueryParams} from '../types';

import {bookAdapter} from './book-adapter';
import {bookController} from './book-controller';
import {Book, BookSection, CategoryIdentify} from './book-types';

async function getCategories() {
  const result = await bookController.getCategories();
  const categories = bookAdapter.toBookCategory(result);
  return categories;
}

async function getBookSections(uid?: string): Promise<BookSection[]> {
  if (!uid) {
    return [];
  }

  return [
    {
      identify: 'recommended-for-you',
      title: 'Recommended For You',
      books: [],
    },
    {
      identify: 'best-seller',
      title: 'Best Seller',
      books: [],
    },
    {
      identify: 'fiction',
      title: 'Fiction',
      books: [],
    },
    {
      identify: 'fantasy',
      title: 'Fantasy',
      books: [],
    },
    {
      identify: 'adventure',
      title: 'Adventure',
      books: [],
    },
    {
      identify: 'fairy tales',
      title: 'Fairy Tales',
      books: [],
    },
    {
      identify: 'philosophy',
      title: 'Philosophy',
      books: [],
    },
    {
      identify: 'mystery',
      title: 'Mystery',
      books: [],
    },
  ];
}

async function getBookListByCategory({
  category,
  skip,
  top,
  uid,
}: {
  category: CategoryIdentify;
  uid?: string;
} & QueryParams): Promise<PaginatedResult<Book>> {
  if (!uid) {
    return {
      docs: [],
      meta: {
        nextPage: null,
        page: 0,
        prevPage: null,
        totalDocs: 0,
        totalPages: 0,
      },
    };
  }
  const result = await bookController.findByCategory({
    uid,
    top,
    skip,
    category,
  });

  return bookAdapter.toListSection(result);
}

async function getBooksBySearchText({
  top,
  skip,
  searchText,
}: {searchText: string} & QueryParams): Promise<PaginatedResult<Book>> {
  if (searchText.trim() === '') {
    return {
      docs: [],
      meta: {
        nextPage: null,
        page: 0,
        prevPage: null,
        totalDocs: 0,
        totalPages: 0,
      },
    };
  }
  const result = await bookController.findBySearchText({top, skip, searchText});

  return bookAdapter.toListSection(result);
}

async function getBookData(id: string) {
  console.log('ENTROU AQUI GET BOOK DATA');

  const result = await bookController.findById(id);
  console.log('RESULT', result);
  return result ? bookAdapter.toBookData(result) : null;
}

async function getBookReading(id: string) {
  const result = await bookController.getReadBookText(id);
  return result.text;
}

export const bookService = {
  getBookData,
  getCategories,
  getBookSections,
  getBooksBySearchText,
  getBookListByCategory,
  getBookReading,
};
