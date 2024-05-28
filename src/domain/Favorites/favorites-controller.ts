import {EntitiesRepository} from '@repositories';

import {QueryParams} from '../types';

async function createFavoriteData(bookId: string, uid: string) {
  await EntitiesRepository.post('favorites', {
    book_id: bookId,
    uid,
  });
}

async function getAll(
  query?: QueryParams & {uid: string; searchText?: string},
) {
  const result = await EntitiesRepository.read('favorites', query);
  return result;
}

async function getByUid(bookId: string, uid?: string) {
  const result = await EntitiesRepository.read('favorites', {uid, bookId});

  return result;
}

async function deleteFavoriteData(id: string) {
  await EntitiesRepository.deleteData('favorites', id);
}

export const favoritesController = {
  createFavoriteData,
  deleteFavoriteData,
  getByUid,
  getAll,
};
