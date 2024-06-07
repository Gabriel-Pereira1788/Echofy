import {PaginatedResult} from '@infra';

import {QueryParams} from '../types';

import {bookAdapter} from './bookAdapter';
import {bookGateway} from './bookGateway';
import {Book, BookSection, CategoryIdentify} from './bookTypes';

async function getCategories() {
  const result = await bookGateway.getCategories();
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
    },
    {
      identify: 'best-seller',
      title: 'Best Seller',
    },
    {
      identify: 'fiction',
      title: 'Fiction',
    },
    {
      identify: 'fantasy',
      title: 'Fantasy',
    },
    {
      identify: 'adventure',
      title: 'Adventure',
    },
    {
      identify: 'fairy tales',
      title: 'Fairy Tales',
    },
    {
      identify: 'philosophy',
      title: 'Philosophy',
    },
    {
      identify: 'mystery',
      title: 'Mystery',
    },
  ];
}

async function getBookListByCategory({
  category,
  page,
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

  const skip = page === 1 ? 0 : page! * 10;
  const result = await bookGateway.findByCategory({
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
  const result = await bookGateway.findBySearchText({top, skip, searchText});

  return bookAdapter.toListSection(result);
}

async function getBookData(id: string) {
  const result = await bookGateway.findById(id);
  return result ? bookAdapter.toBookData(result) : null;
}

async function updateLocalBookChapter(bookId: string, body: Partial<Book>) {
  const bookUpdateData = bookAdapter.toBookUpdateData(body);
  await bookGateway.update(bookId, bookUpdateData);
}

async function getBookChapter(bookId?: string, chapterNumber?: number) {
  if (!bookId || chapterNumber === undefined) {
    return null;
  }
  const result = await bookGateway.findById(bookId);

  const bookData = result ? bookAdapter.toBookData(result) : null;

  return bookData
    ? bookData.playlistChapters.find(
        playlistChapter => playlistChapter.chapter === chapterNumber,
      )
    : null;
}

export const bookService = {
  getBookData,
  getCategories,
  getBookSections,
  getBooksBySearchText,
  getBookListByCategory,
  getBookChapter,
  updateLocalBookChapter,
};
