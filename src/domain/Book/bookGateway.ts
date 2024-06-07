import {PaginatedDocs} from '@infra';
import {IBookExternalData} from '@models';
import {
  bookApiRepository,
  bookLocalRepository,
  categoryApiRepository,
  categoryLocalRepository,
  managerRepositoryData,
} from '@repositories';

import {QueryByCategory, QuerySearchByText} from './bookTypes';

async function getCategories() {
  const categoriesData = await managerRepositoryData.fetchAndSync<
    string[] | null
  >({
    toUseLocalData: result => !!result && result.length > 0,
    fetchApiRepository: async () => categoryApiRepository.get({}),
    fetchLocalRepository: async () => categoryLocalRepository.get({}),
    syncLocalRepository: result => categoryLocalRepository.create(result),
  });

  return categoriesData ? categoriesData : [];
}

async function findByCategory(query: QueryByCategory) {
  return await managerRepositoryData.fetchAndSync<PaginatedDocs<IBookExternalData> | null>(
    {
      toUseLocalData: result => !!result && result.docs.length > 0,
      fetchApiRepository: async () => bookApiRepository.get(query),
      fetchLocalRepository: async () => bookLocalRepository.get(query),
      syncLocalRepository: result => bookLocalRepository.create(result!),
    },
  );
}

async function findBySearchText(query: QuerySearchByText) {
  return await managerRepositoryData.fetchAndSync({
    toUseLocalData: result => !!result && result.docs.length > 0,
    fetchApiRepository: async () => bookApiRepository.get(query),
    fetchLocalRepository: async () => bookLocalRepository.get(query),
    syncLocalRepository: result => bookLocalRepository.create(result!),
  });
}

async function findById(id: string) {
  return await managerRepositoryData.fetchAndSync({
    toUseLocalData: result => !!result,
    fetchApiRepository: async () => bookApiRepository.findById(id),
    fetchLocalRepository: async () => bookLocalRepository.findById(id),
    syncLocalRepository: result => bookLocalRepository.create(result!),
  });
}

async function update(id: string, body: Partial<IBookExternalData>) {
  bookLocalRepository.update(id, body);
}

export const bookGateway = {
  getCategories,
  findByCategory,
  findById,
  findBySearchText,
  update,
};
