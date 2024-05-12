import {api} from '@api';

import {CategoryRepository} from './types';

const get: CategoryRepository['get'] = async () => {
  const response = await api.get<string[]>('book/categories');
  return response && response.data;
};

export const categoryApiRepository: Omit<CategoryRepository, 'create'> = {
  get,
};
