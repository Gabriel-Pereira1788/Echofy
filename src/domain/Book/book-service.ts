import {bookAdapter} from './book-adapter';
import {bookApi} from './book-api';
import {BookSection} from './book-types';

async function getCategories() {
  const result = await bookApi.getCategories();
  const categories = bookAdapter.toBookCategory(result);
  return categories;
}

async function getBookSections(uid?: string): Promise<BookSection[]> {
  if (!uid) {
    return [];
  }
  const recommendedForYouData = await bookApi.getRecommendedForYou(uid);
  return [
    {
      identify: 'recommended-for-you',
      title: 'Recommended For You',
      books: recommendedForYouData.docs.map(doc => bookAdapter.toBookData(doc)),
    },
  ];
}

export const bookService = {
  getCategories,
  getBookSections,
};
