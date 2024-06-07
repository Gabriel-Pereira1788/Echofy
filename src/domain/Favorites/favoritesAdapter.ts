import {PaginatedDocs, PaginatedResult} from '@infra';
import {IFavoriteExternalData} from '@models';

import {bookAdapter} from '../Book';

import {FavoriteBook} from './favoritesTypes';

function toFavoriteBookData(
  favoriteExternalData: IFavoriteExternalData,
): FavoriteBook {
  return {
    book: bookAdapter.toBookData(favoriteExternalData.book!),
    id: favoriteExternalData.id!,
    uid: favoriteExternalData.uid,
  };
}

function toPaginatedResult(
  favorites: PaginatedDocs<IFavoriteExternalData> | null,
): PaginatedResult<FavoriteBook> {
  return {
    docs: favorites ? favorites.docs.map(doc => toFavoriteBookData(doc)) : [],
    meta: {
      nextPage: favorites?.nextPage || null,
      page: favorites?.page || 0,
      prevPage: favorites?.prevPage || null,
      totalDocs: favorites?.totalDocs || 0,
      totalPages: favorites?.totalPages || 0,
    },
  };
}
export const favoritesAdapter = {toFavoriteBookData, toPaginatedResult};
