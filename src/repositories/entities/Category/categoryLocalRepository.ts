import {IBookCategorySchema, Schemas, database} from '@database';

import {CategoryRepository} from './types';

function toCategorySchemaData(category: string) {
  return {
    text: category,
  };
}
const create: CategoryRepository['create'] = async data => {
  const categories = data as string[];
  categories.forEach(value => {
    database.create(Schemas.BookCategory, toCategorySchemaData(value));
  });
};

const get: CategoryRepository['get'] = async () => {
  const results = await database.getAll<IBookCategorySchema>(
    Schemas.BookCategory,
  );

  return results.map(data => data.text);
};

export const categoryLocalRepository: CategoryRepository = {
  create,
  get,
};
