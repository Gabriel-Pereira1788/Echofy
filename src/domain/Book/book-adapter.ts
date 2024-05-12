import {PaginatedDocs, PaginatedResult} from '@infra';
import {IBookExternalData} from '@models';

import {Book, BookCategory, CategoryIdentify} from './book-types';

function toBookCategory(categories: string[]): BookCategory[] {
  return categories.map(category => ({
    isSelected: false,
    text: category as CategoryIdentify,
  }));
}

function toBookData(book: IBookExternalData): Book {
  return {
    id: book.id,
    bookDesc: book.book_desc,
    bookGenres: book.book_genres,
    bookImage: book.book_image,
    bookTitle: book.book_title,
    bookAuthor: book.book_author,
    bookReadLink: book.book_read_link,
    playlistChapters: book.playlist_chapters,
  };
}

function toListSection(
  bookSection: PaginatedDocs<IBookExternalData> | null,
): PaginatedResult<Book> {
  return {
    docs: bookSection
      ? bookSection.docs.map(doc => bookAdapter.toBookData(doc))
      : [],
    meta: {
      nextPage: bookSection?.nextPage || null,
      page: bookSection?.page || 0,
      prevPage: bookSection?.prevPage || null,
      totalDocs: bookSection?.totalDocs || 0,
      totalPages: bookSection?.totalPages || 0,
    },
  };
}
export const bookAdapter = {
  toBookData,
  toBookCategory,
  toListSection,
};
