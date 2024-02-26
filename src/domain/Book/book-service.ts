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
    bookApi.getBestSeller({}),
    bookApi.getByCategory({
      category: 'adventure',
    }),
    bookApi.getByCategory({
      category: 'fiction',
    }),
    bookApi.getByCategory({
      category: 'fantasy',
    }),
    bookApi.getByCategory({
      category: 'fairy tales',
    }),
    bookApi.getByCategory({
      category: 'philosophy',
    }),
    bookApi.getByCategory({
      category: 'mystery',
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
      title: 'fantasy',
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
}: {
  category: CategoryIdentify;
} & QueryParams): Promise<PaginatedResult<Book>> {
  const result = await bookApi.getByCategory({
    category,
    top,
    skip,
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
export const bookService = {
  getCategories,
  getBookSections,
  getBookListByCategory,
};
