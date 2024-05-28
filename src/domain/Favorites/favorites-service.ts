import {QueryParams} from '../types';

import {favoritesAdapter} from './favorites-adapter';
import {favoritesController} from './favorites-controller';

async function sendToFavorites(bookId: string, uid: string) {
  await favoritesController.createFavoriteData(bookId, uid);
}

async function removeToFavorite(id: string) {
  await favoritesController.deleteFavoriteData(id);
}

async function getFavorites({
  page,
  top,
  uid,
  searchText,
}: QueryParams & {uid: string; searchText?: string}) {
  const skip = page === 1 ? 0 : page! * 10;
  const result = await favoritesController.getAll({
    skip,
    top,
    uid,
    searchText,
  });

  return favoritesAdapter.toPaginatedResult(result);
}

async function getFavoriteBook(bookId: string, uid?: string) {
  try {
    const result = await favoritesController.getByUid(bookId, uid);

    if (result && result.docs.length > 0) {
      const data = result.docs[0];

      return favoritesAdapter.toFavoriteBookData(data);
    }

    return null;
  } catch (error) {
    console.log('ERROR', error);
    return null;
  }
}

export const favoritesService = {
  sendToFavorites,
  getFavorites,
  getFavoriteBook,
  removeToFavorite,
};
