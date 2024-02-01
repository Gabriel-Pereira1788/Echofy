import {api} from '@api';

import {BookSectionApi} from './book-types';

async function getCategories() {
  const response = await api.get<string[]>('book/categories');
  return response.data;
}

async function getRecommendedForYou(uid: string) {
  const response = await api.get<BookSectionApi>(
    `book/recommended-for-you/${uid}?top=15`,
  );
  return response.data;
}

export const bookApi = {
  getCategories,
  getRecommendedForYou,
};
