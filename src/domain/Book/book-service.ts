import {bookAdapter} from './book-adapter';
import {bookApi} from './book-api';

async function getCategories() {
  const result = await bookApi.getCategories();
  const categories = bookAdapter.toBookCategory(result);
  return categories;
}

export const bookService = {
  getCategories,
};
