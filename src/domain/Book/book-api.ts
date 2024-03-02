import {api} from '@api';

import {QueryParams} from '../types';

import {BookApi, BookSectionApi, CategoryIdentify} from './book-types';

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
  uid,
  skip = 0,
}: {category: CategoryIdentify; uid: string} & QueryParams) {
  if (category === 'recommended-for-you') {
    const response = await getRecommendedForYou({
      uid,
      top,
      skip,
    });

    return response;
  }

  if (category === 'best-seller') {
    const response = await getBestSeller({
      top,
      skip,
    });

    return response;
  }
  const response = await api.get<BookSectionApi>(
    `book/find-by-category/${category}?top=${top}&skip=${skip}`,
  );
  return response.data;
}

async function findBySearchText({
  searchText,
  top = 10,
  skip = 0,
}: {searchText: string} & QueryParams) {
  const response = await api.get<BookSectionApi>(
    `book/find-by-text/${searchText}?top=${top}&skip=${skip}`,
  );

  return response.data;
}

async function findById(id: string) {
  const response = await api.get<BookApi>(`book/find-book/${id}`);

  return response.data;
}

export const bookApi = {
  getCategories,
  getBestSeller,
  getByCategory,
  findById,
  findBySearchText,
  getRecommendedForYou,
};
