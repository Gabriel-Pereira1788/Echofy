import {PaginatedDocs, PaginatedResult} from '@infra';
import {IBookExternalData, PlaylistChapterExternalData} from '@models';

import {
  Book,
  BookCategory,
  CategoryIdentify,
  PlaylistChapter,
} from './book-types';

function toBookCategory(categories: string[]): BookCategory[] {
  if (categories.length === 0) {
    return [];
  }
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
    voteRating: Number(book.book_star_raiting),
    playlistChapters: toPlaylistData(book.playlist_chapters),
  };
}

function toPlaylistData(
  playlistChapters?: PlaylistChapterExternalData[],
): PlaylistChapter[] {
  return playlistChapters
    ? playlistChapters.map(data => ({
        chapter: data.chapter,
        localSrc: data.local_src,
        src: data.src,
      }))
    : [];
}

function toBookUpdateData(book: Partial<Book>): Partial<IBookExternalData> {
  return {
    id: book.id,
    book_desc: book.bookDesc,
    book_author: book.bookAuthor,
    book_genres: book.bookGenres,
    book_image: book.bookImage,
    book_read_link: book.bookReadLink,
    book_title: book.bookTitle,
    playlist_chapters: toPlaylistUpdateData(book.playlistChapters),
  };
}

function toPlaylistUpdateData(
  playlistChapters?: PlaylistChapter[],
): PlaylistChapterExternalData[] {
  return playlistChapters
    ? playlistChapters.map(data => ({
        chapter: data.chapter,
        local_src: data.localSrc,
        src: data.src,
      }))
    : [];
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
  toBookUpdateData,
};
