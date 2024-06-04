import {IBookExternalData} from '@models';
import {ActionMode, EntitiesRepository} from '@repositories';

import {QueryByCategory, QuerySearchByText} from './book-types';

async function getCategories() {
  const categoriesData = await EntitiesRepository.read('category');
  return categoriesData ? categoriesData : [];
}

async function findByCategory(query: QueryByCategory) {
  return await EntitiesRepository.read('book', {
    ...query,
    limitOffset: 8,
  });
}

async function findBySearchText(query: QuerySearchByText) {
  return await EntitiesRepository.read('book', {
    ...query,
    limitOffset: 8,
  });
}

async function findById(id: string) {
  return await EntitiesRepository.findById('book', id);
}

async function update(
  id: string,
  body: Partial<IBookExternalData>,
  mode: ActionMode,
) {
  return await EntitiesRepository.update({
    id,
    body,
    entityName: 'book',
    mode,
  });
}

export const bookController = {
  getCategories,
  findByCategory,
  findById,
  findBySearchText,
  update,
};
