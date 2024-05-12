import {Schemas, database} from '@database';

import {ReviewRepository} from './types';

const getReviews: ReviewRepository['getReviews'] = async ({
  top = 10,
  skip = 0,
  bookId,
}) => {
  const results = database.readPaginatedResult(
    Schemas.Review,
    {
      skip,
      top,
    },
    {
      field: 'book_id',
      valueMatch: bookId,
      filter: 'book_id == $0',
    },
  );
  return results;
};

const postReview: ReviewRepository['postReview'] = async (body, bookId) => {
  await database.create(Schemas.Review, {
    book_id: bookId,
    ...body,
  });
};

const create: ReviewRepository['create'] = data => {
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

export const reviewLocalRepository: ReviewRepository = {
  getReviews,
  postReview,
  create,
};
