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
  const recommendedForYouData = await bookController.getRecommendedForYou({
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
    bookController.findByCategory({
      category: 'best-seller',
      uid,
    }),
    bookController.findByCategory({
      category: 'adventure',
      uid,
    }),
    bookController.findByCategory({
      category: 'fiction',
      uid,
    }),
    bookController.findByCategory({
      category: 'fantasy',
      uid,
    }),
    bookController.findByCategory({
      category: 'fairy tales',
      uid,
    }),
    bookController.findByCategory({
      category: 'philosophy',
      uid,
    }),
    bookController.findByCategory({
      category: 'mystery',
      uid,
    }),
  ]);

  return [
    {
      identify: 'recommended-for-you',
      title: 'Recommended For You',
      books: recommendedForYouData
        ? recommendedForYouData.docs.map(doc => bookAdapter.toBookData(doc))
        : [],
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
  const result = await bookController.findByCategory({
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
  const result = await bookController.findBySearchText({top, skip, searchText});

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

async function getBookData(id: string) {
  const result = await bookController.findById(id);

  return bookAdapter.toBookData(result);
}

export const bookService = {
  getBookData,
  getCategories,
  getBookSections,
  getBooksBySearchText,
  getBookListByCategory,
};
