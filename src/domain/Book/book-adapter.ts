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
export const bookAdapter = {
  toBookCategory,
  toBookData,
};
