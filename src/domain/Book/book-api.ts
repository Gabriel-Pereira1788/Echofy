import {api} from '@api';

async function getCategories() {
  const response = await api.get<string[]>('book/categories');
  return response.data;
}

export const bookApi = {
  getCategories,
};
