import {PaginatedResult} from '@infra';
import reactotron from 'reactotron-react-native';

import {QueryParams} from '../types';

import {bookAdapter} from './bookAdapter';
import {bookGateway} from './bookGateway';
import {Book, CategoryIdentify} from './bookTypes';

async function getCategories() {
  const result = await bookGateway.getCategories();
  const categories = bookAdapter.toBookCategory(result);
  return categories;
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

async function syncBooksData(skip: number = 0) {
  try {
    const result = await bookGateway.syncLocalBooks({
      top: 10,
      skip: skip ? skip : 0,
    });

    const isLastPage = result && result.page === result.totalPages;

    if (!isLastPage) {
      const syncedCount = result ? skip + result.docs.length : 0;
      return syncBooksData(syncedCount);
    }
  } catch (err) {
    reactotron.log('[ERROR ON SYNC BOOK DATA]', err);
  }
}

export const bookService = {
  getBookData,
  getCategories,
  syncBooksData,
  getBookChapter,
  getBooksBySearchText,
  getBookListByCategory,
  updateLocalBookChapter,
};
