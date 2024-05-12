import {Schemas, database} from '@database';

import {ReviewRepo} from './types';

const get: ReviewRepo['get'] = async ({top = 10, skip = 0, bookId}) => {
  const results = database.readPaginatedResult(
    Schemas.Review,
    {
      skip,
      top,
    },
    {
      field: 'book_id',
      valueMatch: bookId!,
      filter: 'book_id == $0',
    },
  );
  return results;
};

const post: ReviewRepo['post'] = async body => {
  await database.create(Schemas.Review, body);
};

const create: ReviewRepo['create'] = data => {
  try {
    if (Array.isArray(data)) {
      data.forEach(value => {
        database.create(Schemas.Review, value);
      });
    } else {
      database.create(Schemas.Review, data);
    }
  } catch (error) {
    console.log('ERROR ON CREATE', Schemas.Review, error);
  }
};

export const reviewLocalRepository: ReviewRepo = {
  get,
  post,
  create,
};
