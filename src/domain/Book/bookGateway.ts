import {PaginatedDocs} from '@infra';
import {IBookExternalData} from '@models';
import {
  bookApiRepository,
  bookLocalRepository,
  categoryApiRepository,
  categoryLocalRepository,
  managerRepositoryData,
} from '@repositories';

import {QueryParams} from '../types';

import {QueryByCategory, QuerySearchByText} from './bookTypes';

async function getCategories() {
  const categoriesData = await managerRepositoryData.fetchAndSync<
    string[] | null
  >({
    toUseLocalData: result => !!result && result.length > 0,
    fetchApiRepository: async () => await categoryApiRepository.get({}),
    fetchLocalRepository: async () => await categoryLocalRepository.get({}),
    syncLocalRepository: result => categoryLocalRepository.create(result),
  });

  return categoriesData ? categoriesData : [];
}

async function findByCategory(query: QueryByCategory) {
  return await managerRepositoryData.fetchAndSync<PaginatedDocs<IBookExternalData> | null>(
    {
      toUseLocalData: result => !!result && result.docs.length > 0,
      fetchApiRepository: async () => await bookApiRepository.get(query),
      fetchLocalRepository: async () => await bookLocalRepository.get(query),
      syncLocalRepository: result => bookLocalRepository.create(result!),
    },
  );
}

async function findBySearchText(query: QuerySearchByText) {
  return await managerRepositoryData.fetchAndSync({
    toUseLocalData: result => !!result && result.docs.length > 0,
    fetchApiRepository: async () => await bookApiRepository.get(query),
    fetchLocalRepository: async () => await bookLocalRepository.get(query),
    syncLocalRepository: result => bookLocalRepository.create(result!),
  });
}

async function findById(id: string) {
  return await managerRepositoryData.fetchAndSync({
    toUseLocalData: result => !!result,
    fetchApiRepository: async () => await bookApiRepository.findById(id),
    fetchLocalRepository: async () => await bookLocalRepository.findById(id),
    syncLocalRepository: result => bookLocalRepository.create(result!),
  });
}

async function update(id: string, body: Partial<IBookExternalData>) {
  bookLocalRepository.update(id, body);
}

async function syncLocalBooks(query: QueryParams) {
  const result = await bookApiRepository.get(query);

  if (result && result.docs.length > 0) {
    await bookLocalRepository.create(result);
  }

  return result;
}

export const bookGateway = {
  getCategories,
  findByCategory,
  findById,
  findBySearchText,
  update,
  syncLocalBooks,
};
