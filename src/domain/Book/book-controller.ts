import {EntitiesRepository} from '@repositories';

import {QueryByCategory, QuerySearchByText} from './book-types';

async function getCategories() {
  const categoriesData = await EntitiesRepository.read('category');
  return categoriesData ? categoriesData : [];
}

async function findByCategory(query: QueryByCategory) {
  return await EntitiesRepository.read('book', query);
}

async function findBySearchText(query: QuerySearchByText) {
  return await EntitiesRepository.read('book', query);
}

async function findById(id: string) {
  return await EntitiesRepository.findById('book', id);
}

export const bookController = {
  getCategories,
  findByCategory,
  findById,
  findBySearchText,
};
