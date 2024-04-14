import {Schemas} from '@infra';

import {QueryParams} from '../types';

import {bookAdapter} from './book-adapter';
import {
  BookRepository,
  bookApiRepository,
  bookLocalRepository,
} from './repository';

async function getBestSeller(query: QueryParams) {
  const localResult = await bookLocalRepository.getBestSeller(query);
  console.log('BEST-SELLER-LOCAL-RESULT', localResult);
  if (!localResult) {
    return localResult;
  } else {
    const result = await bookApiRepository.getBestSeller(query);
    if (result) {
      bookLocalRepository.create(Schemas.Book, result.docs);
      return result;
    } else {
      return null;
    }
  }
}

const getCategories: BookRepository['getCategories'] = async () => {
  const localCategories = await bookLocalRepository.getCategories();

  if (localCategories && localCategories.length > 0) {
    return localCategories;
  } else {
    const result = await bookApiRepository.getCategories();

    bookLocalRepository.create(
      Schemas.BookCategory,
      bookAdapter.toCategorySchemaData(result),
    );
    return result;
  }
};

const getRecommendedForYou: BookRepository['getRecommendedForYou'] =
  async query => {
    console.log('ENTROU AQUI');
    const localResult = await bookLocalRepository.getRecommendedForYou(query);
    console.log('RECOMMENDED-FOR-YOU-RESULTS', localResult);
    if (localResult) {
      return localResult;
    } else {
      const result = await bookApiRepository.getRecommendedForYou(query);

      if (result) {
        bookLocalRepository.create(Schemas.Book, result.docs);

        return result;
      } else {
        return null;
      }
    }
  };

const findByCategory: BookRepository['findByCategory'] = async query => {
  const result = await bookApiRepository.findByCategory(query);
  return result;
};

const findBySearchText: BookRepository['findBySearchText'] = async query => {
  const result = await bookApiRepository.findBySearchText(query);
  return result;
};

const findById: BookRepository['findById'] = async query => {
  const result = await bookApiRepository.findById(query);
  return result;
};

export const bookController = {
  getBestSeller,

  getCategories,
  getRecommendedForYou,
  findByCategory,
  findById,
  findBySearchText,
};
