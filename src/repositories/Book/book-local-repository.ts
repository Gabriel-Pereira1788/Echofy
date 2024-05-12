import {Schemas, database} from '@database';
import {QueryParams} from '@domain';

import {BookRepository, QueryByCategory} from './types';

async function getRecommendedForYou(top?: number, skip?: number) {
  const results = database.readPaginatedResult(Schemas.Book, {
    skip: skip,
    top: top,
  });

  return results;
}

async function getBestSeller(top?: number, skip?: number) {
  const results = database.readPaginatedResult(Schemas.Book, {
    skip: skip,
    top: top,
  });
  return results;
}
async function findByCategory(query: QueryByCategory) {
  if (query.category === 'best-seller') {
    const result = getBestSeller(query.top, query.skip);

    return result;
  }

  if (query.category === 'recommended-for-you') {
    const result = getRecommendedForYou(query.top, query.skip);

    return result;
  }

  const result = database.readPaginatedResult(
    Schemas.Book,
    {
      skip: query.skip,
      top: query.top,
    },
    {
      field: 'book_genres',
      valueMatch: query.category,
      filter: 'book_genres CONTAINS[c] $0',
    },
  );
  return result;
}
async function findBySearchText(query: QueryParams & {searchText: string}) {
  const result = database.readPaginatedResult(
    Schemas.Book,
    {
      skip: query.skip,
      top: query.top,
    },
    {
      field: 'book_genres',
      valueMatch: query.searchText,
      filter: 'book_title CONTAINS[c] $0',
    },
  );
  return result;
}
const get: BookRepository['get'] = async query => {
  if (query.searchText) {
    return await findBySearchText({
      top: query.top,
      skip: query.skip,
      searchText: query.searchText,
    });
  }

  if (query.category && query.uid) {
    return await findByCategory({
      category: query.category,
      top: query.top,
      skip: query.skip,
      uid: query.uid,
    });
  }

  return null;
};

const findById: BookRepository['findById'] = async id => {
  const result = database.findById(Schemas.Book, id);

  if (result && result.length > 0) {
    return result[0];
  }

  return null;
};

const create: BookRepository['create'] = async data => {
  try {
    if (Array.isArray(data)) {
      data.forEach(value => {
        database.create(Schemas.Book, value);
      });
    } else {
      database.create(Schemas.Book, data);
    }
  } catch (error) {
    console.log('ERROR ON CREATE', Schemas.Book, error);
  }
};
export const bookLocalRepository: BookRepository = {
  get,
  findById,
  create,
};
