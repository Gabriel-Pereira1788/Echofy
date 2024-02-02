import {bookAdapter} from './book-adapter';
import {bookApi} from './book-api';
import {BookApi, BookSection} from './book-types';

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
    literatureBookData,
  ] = await Promise.all([
    bookApi.getBestSeller({}),
    bookApi.getByCategory({
      category: 'adventure',
    }),
    bookApi.getByCategory({
      category: 'fiction',
    }),
    bookApi.getByCategory({
      category: 'literature',
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
      books: dontRepeatBooks(recommendedForYouData.docs, bestSellerData.docs),
    },
    {
      identify: 'fiction',
      title: 'Fiction',
      books: dontRepeatBooks(recommendedForYouData.docs, fictionBookData.docs),
    },
    {
      identify: 'literature',
      title: 'Literature',
      books: dontRepeatBooks(
        recommendedForYouData.docs,
        literatureBookData.docs,
      ),
    },
    {
      identify: 'adventure',
      title: 'Adventure',
      books: dontRepeatBooks(
        recommendedForYouData.docs,
        adventureBookData.docs,
      ),
    },
  ];
}

function dontRepeatBooks(repeatedBook: BookApi[], listToRemove: BookApi[]) {
  const filteredList = listToRemove.filter(
    book => !repeatedBook.find(_book => _book.id === book.id),
  );
  return filteredList.map(book => bookAdapter.toBookData(book));
}

export const bookService = {
  getCategories,
  getBookSections,
};
