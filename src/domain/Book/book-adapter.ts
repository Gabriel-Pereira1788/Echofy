import {IBookCategorySchema} from '@infra';

import {Book, BookApi, BookCategory} from './book-types';

function toBookCategory(categories: string[]): BookCategory[] {
  return categories.map(category => ({
    isSelected: false,
    text: category,
  }));
}

function toBookData(book: BookApi): Book {
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

function toCategorySchemaData(categories: string[]): IBookCategorySchema[] {
  return categories.map(category => ({text: category}));
}
export const bookAdapter = {
  toBookData,
  toBookCategory,
  toCategorySchemaData,
};
