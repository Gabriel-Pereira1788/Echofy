import {api} from '@api';

import {QueryParams} from '../types';

import {BookSectionApi} from './book-types';

async function getCategories() {
  const response = await api.get<string[]>('book/categories');
  return response.data;
}

async function getRecommendedForYou({
  uid,
  top = 10,
  skip = 0,
}: {uid: string} & QueryParams) {
  const response = await api.get<BookSectionApi>(
    `book/recommended-for-you/${uid}?top=${top}&skip=${skip}`,
  );
  return response.data;
}

async function getBestSeller({top = 10, skip = 0}: QueryParams) {
  const response = await api.get<BookSectionApi>(
    `book/best-seller?top=${top}&skip=${skip}`,
  );
  return response.data;
}

async function getByCategory({
  category,
  top = 10,
  skip = 0,
}: {category: string} & QueryParams) {
  const response = await api.get<BookSectionApi>(
    `book/find-by-category/${category}?top=${top}&skip=${skip}`,
  );
  return response.data;
}
export const bookApi = {
  getCategories,
  getBestSeller,
  getByCategory,
  getRecommendedForYou,
};
