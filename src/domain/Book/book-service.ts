import {PaginatedResult} from '@infra';

import {QueryParams} from '../types';

import {bookAdapter} from './book-adapter';
import {bookApi} from './book-api';
import {Book, BookSection, CategoryIdentify} from './book-types';

async function getCategories() {
  const result = await bookApi.getCategories();
  const categories = bookAdapter.toBookCategory(result);
  return categories;
}

async function getBookSections(uid?: string): Promise<BookSection[]> {
  if (!uid) {
    return [];
  }
  const recommendedForYouData = await bookApi.getRecommendedForYou({
    uid,
    top: 10,
  });

  const [
    bestSellerData,
    adventureBookData,
    fictionBookData,
    fantasyBookData,
    fairyTalesBookData,
    philosophyBookData,
    mysteryBookData,
  ] = await Promise.all([
    bookApi.getByCategory({
      category: 'best-seller',
      uid,
    }),
    bookApi.getByCategory({
      category: 'adventure',
      uid,
    }),
    bookApi.getByCategory({
      category: 'fiction',
      uid,
    }),
    bookApi.getByCategory({
      category: 'fantasy',
      uid,
    }),
    bookApi.getByCategory({
      category: 'fairy tales',
      uid,
    }),
    bookApi.getByCategory({
      category: 'philosophy',
      uid,
    }),
    bookApi.getByCategory({
      category: 'mystery',
      uid,
    }),
  ]);

  return [
    {
      identify: 'recommended-for-you',
      title: 'Recommended For You',
      books: recommendedForYouData.docs.map(doc => bookAdapter.toBookData(doc)),
    },
    {
      identify: 'best-seller',
      title: 'Best Seller',
      books: bestSellerData.docs.map(doc => bookAdapter.toBookData(doc)),
    },
    {
      identify: 'fiction',
      title: 'Fiction',
      books: fictionBookData.docs.map(doc => bookAdapter.toBookData(doc)),
    },
    {
      identify: 'fantasy',
      title: 'Fantasy',
      books: fantasyBookData.docs.map(doc => bookAdapter.toBookData(doc)),
    },
    {
      identify: 'adventure',
      title: 'Adventure',
      books: adventureBookData.docs.map(doc => bookAdapter.toBookData(doc)),
    },
    {
      identify: 'fairy tales',
      title: 'Fairy Tales',
      books: fairyTalesBookData.docs.map(doc => bookAdapter.toBookData(doc)),
    },
    {
      identify: 'philosophy',
      title: 'Philosophy',
      books: philosophyBookData.docs.map(doc => bookAdapter.toBookData(doc)),
    },
    {
      identify: 'mystery',
      title: 'Mystery',
      books: mysteryBookData.docs.map(doc => bookAdapter.toBookData(doc)),
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
  const result = await bookApi.getByCategory({
    uid,
    top,
    skip,
    category,
  });

  return {
    docs: result.docs.map(doc => bookAdapter.toBookData(doc)),
    meta: {
      nextPage: result.nextPage,
      page: result.page,
      prevPage: result.prevPage,
      totalDocs: result.totalDocs,
      totalPages: result.totalPages,
    },
  };
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
  const result = await bookApi.getBySearchText({top, skip, searchText});

  return {
    docs: result.docs.map(doc => bookAdapter.toBookData(doc)),
    meta: {
      nextPage: result.nextPage,
      page: result.page,
      prevPage: result.prevPage,
      totalDocs: result.totalDocs,
      totalPages: result.totalPages,
    },
  };
}

export const bookService = {
  getCategories,
  getBookSections,
  getBooksBySearchText,
  getBookListByCategory,
};
