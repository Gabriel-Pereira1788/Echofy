import {
  favoriteApiRepository,
  favoriteLocalRepository,
  managerRepositoryData,
} from '@repositories';

import {QueryParams} from '../types';

async function createFavoriteData(bookId: string, uid: string) {
  await managerRepositoryData.actionModifier({
    actionApiRepository: async () =>
      await favoriteApiRepository.post({book_id: bookId, uid}),
    actionLocalRepository: async result => {
      return await favoriteLocalRepository.post(result!);
    },
    buildEntitySync: response => ({
      action: 'CREATE',
      entity: 'favorites',
      localId: response?.local_id,
    }),
  });
}

async function getAll(
  query?: QueryParams & {uid: string; searchText?: string},
) {
  return await managerRepositoryData.fetchAndSync({
    toUseLocalData: result => !!result && result.docs.length > 0,
    fetchApiRepository: async () => favoriteApiRepository.get(query!),
    fetchLocalRepository: async () => favoriteLocalRepository.get(query!),
    syncLocalRepository: async dataToSync =>
      dataToSync && favoriteLocalRepository.create(dataToSync),
  });
}

async function getByUid(bookId: string, uid?: string) {
  return await managerRepositoryData.fetchAndSync({
    toUseLocalData: result => !!result && result.docs.length > 0,
    fetchApiRepository: async () =>
      favoriteApiRepository.get({
        bookId,
        uid,
      }),
    fetchLocalRepository: async () =>
      favoriteLocalRepository.get({
        bookId,
        uid,
      }),
    syncLocalRepository: async dataToSync =>
      dataToSync && (await favoriteLocalRepository.create(dataToSync)),
  });
}

async function deleteFavoriteData(id: string) {
  await managerRepositoryData.actionModifier({
    actionApiRepository: () => favoriteApiRepository.deleteData(id),
    actionLocalRepository: () => favoriteLocalRepository.deleteData(id),
    buildEntitySync: () => ({
      action: 'DELETE',
      entity: 'favorites',
      localId: id,
    }),
  });
}

export const favoritesGateway = {
  createFavoriteData,
  deleteFavoriteData,
  getByUid,
  getAll,
};
