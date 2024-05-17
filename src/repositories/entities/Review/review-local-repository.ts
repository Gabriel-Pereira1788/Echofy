import {Schemas, database} from '@database';

import {ReviewRepository} from './types';

const get: ReviewRepository['get'] = async ({top = 10, skip = 0, bookId}) => {
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

const post: ReviewRepository['post'] = async body => {
  return await database.create(Schemas.Review, {
    book_id: body.bookId,
    ...body,
  });
};

const create: ReviewRepository['create'] = data => {
  try {
    if (Array.isArray(data)) {
      data.forEach(value => {
        database.create(Schemas.Review, value);
      });
    } else if (data && 'docs' in data) {
      data.docs.forEach(value => {
        database.create(Schemas.Review, value);
      });
    } else {
      database.create(Schemas.Review, data);
    }
  } catch (error) {
    console.log('ERROR ON CREATE', Schemas.Review, error);
  }
};

const update: ReviewRepository['update'] = async (id, body) => {
  try {
    database.update(Schemas.Review, id, body);
  } catch (error) {
    console.log('ERROR ON UPDATE REVIEW', error);
  }
};

const deleteData: ReviewRepository['deleteData'] = async id => {
  try {
    database.deleteData(Schemas.Review, id);
  } catch (error) {
    console.log('ERROR ON DELETE REVIEW', error);
  }
};

export const reviewLocalRepository: ReviewRepository = {
  get,
  post,
  create,
  update,
  deleteData,
};
