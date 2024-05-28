import {api} from '@api';
import {PaginatedDocs} from '@infra';
import {IFavoriteExternalData} from '@models';

import {FavoriteRepository} from './types';

const getFavoriteData = async (uid: string, bookId: string) => {
  const result = await api.get<PaginatedDocs<IFavoriteExternalData>>(
    `favorites/get-favorite-data/${uid}/${bookId}`,
  );
  return result.data;
};
const get: FavoriteRepository['get'] = async ({skip, top, uid, bookId}) => {
  if (uid && bookId) {
    return await getFavoriteData(uid, bookId);
  }

  const result = await api.get<PaginatedDocs<IFavoriteExternalData>>(
    `favorites/get-favorites/${uid}?top=${top}&skip=${skip}`,
  );
  return result.data;
};

const post: FavoriteRepository['post'] = async ({uid, book_id}) => {
  const result = await api.post<IFavoriteExternalData>(
    `favorites/send-to-favorites/${uid}/${book_id}`,
  );
  return result.data;
};

const deleteData: FavoriteRepository['deleteData'] = async id => {
  await api.delete(`favorites/remove-to-favorites/${id}`);
};
export const favoriteApiRepository = {
  get,
  post,
  deleteData,
};
