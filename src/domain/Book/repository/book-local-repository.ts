import {IBookCategorySchema, Schemas, database} from '@infra';

import {BookRepository} from './types';

const getCategories: BookRepository['getCategories'] = async () => {
  const results = await database.getAll<IBookCategorySchema>(
    Schemas.BookCategory,
  );

  const categories = results.map(data => data.text);
  return categories;
};

const getRecommendedForYou: BookRepository['getRecommendedForYou'] =
  async query => {
    const results = database.readPaginatedResult(Schemas.Book, {
      skip: query.skip,
      top: query.top,
    });

    return results;
  };

const getBestSeller: BookRepository['getBestSeller'] = async query => {
  const results = database.readPaginatedResult(Schemas.Book, {
    skip: query.skip,
    top: query.top,
  });
  return results;
};

const findByCategory: BookRepository['findByCategory'] = async query => {
  if (query.category === 'best-seller') {
    const result = getBestSeller({
      top: query.top,
      skip: query.skip,
    });

    return result;
  }

  if (query.category === 'recommended-for-you') {
    const result = getRecommendedForYou({
      uid: query.uid,
      skip: query.skip,
      top: query.top,
    });

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
};

const findBySearchText: BookRepository['findBySearchText'] = async query => {
  console.log(query);

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
};

const findById: BookRepository['findById'] = async id => {
  const result = database.findById(Schemas.Book, id);

  if (result && result.length > 0) {
    return result[0];
  }

  return null;
};

const create: BookRepository['create'] = async (schema, data) => {
  try {
    if (Array.isArray(data)) {
      data.forEach(value => {
        database.create(schema, value);
      });
    } else {
      database.create(schema, data);
    }
  } catch (error) {
    console.log('ERROR ON CREATE', schema, error);
  }
};
export const bookLocalRepository: BookRepository = {
  getCategories,
  getRecommendedForYou,
  getBestSeller,
  findByCategory,
  findBySearchText,
  findById,
  create,
};
