import {Schemas, database} from '@database';

import {FavoriteGetQuery, FavoriteRepository} from './types';

const create: FavoriteRepository['create'] = async data => {
  if (data.docs && data.docs.length > 0) {
    const favoriteData = data.docs[0];
    await database.create(Schemas.Favorite, favoriteData);
  }
};

const getFavoriteData = async ({skip, top, uid, bookId}: FavoriteGetQuery) => {
  const result = database.readPaginatedResult(
    Schemas.Favorite,
    {skip, top},
    {
      valueMatch: [uid, bookId],
      filter: 'uid == $0 && book_id == $1',
    },
  );

  return result;
};

const findBySearchText = async ({
  skip,
  top,
  uid,
  searchText,
}: FavoriteGetQuery) => {
  const result = database.readPaginatedResult(
    Schemas.Favorite,
    {skip, top},
    {
      valueMatch: [uid, searchText],
      filter: 'uid == $0 && book.book_title CONTAINS[c] $1',
    },
  );

  return result;
};
const get: FavoriteRepository['get'] = async ({
  skip = 0,
  top = 10,
  uid,
  bookId,
  searchText,
}) => {
  if (uid && bookId) {
    return await getFavoriteData({skip, top, uid, bookId});
  }

  if (uid && searchText) {
    return await findBySearchText({skip, top, uid, searchText});
  }
  const result = database.readPaginatedResult(
    Schemas.Favorite,
    {skip, top},
    {
      valueMatch: [uid],
      filter: 'uid == $0',
    },
  );

  return result;
};

const post: FavoriteRepository['post'] = async ({uid, book_id, id}) => {
  const data = await database.create(Schemas.Favorite, {
    id,
    uid,
    book_id: book_id,
  });

  return data;
};

const deleteData: FavoriteRepository['deleteData'] = async (id: string) => {
  await database.deleteData(Schemas.Favorite, id);
};
export const favoriteLocalRepository = {
  create,
  post,
  get,
  deleteData,
};
