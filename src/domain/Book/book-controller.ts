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
    const localResult = await bookLocalRepository.getRecommendedForYou(query);

    if (localResult && localResult.docs.length > 0) {
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
  const localResult = await bookLocalRepository.findByCategory(query);
  if (localResult && localResult.docs.length >= 8) {
    return localResult;
  } else {
    const result = await bookApiRepository.findByCategory(query);
    if (result) {
      bookLocalRepository.create(Schemas.Book, result.docs);
      return result;
    } else {
      return null;
    }
  }
};

const findBySearchText: BookRepository['findBySearchText'] = async query => {
  const localResult = await bookLocalRepository.findBySearchText(query);
  console.log('BY-LOCAL-SEARCH', localResult);
  if (localResult && localResult.docs.length > 0) {
    return localResult;
  } else {
    const result = await bookApiRepository.findBySearchText(query);
    if (result) {
      bookLocalRepository.create(Schemas.Book, result.docs);
      return result;
    } else {
      return null;
    }
  }
};

const findById: BookRepository['findById'] = async query => {
  const localResult = await bookLocalRepository.findById(query);
  if (localResult) {
    return localResult;
  } else {
    const result = await bookApiRepository.findById(query);
    if (result) {
      bookLocalRepository.create(Schemas.Book, result);
      return result;
    } else {
      return null;
    }
  }
};

export const bookController = {
  getBestSeller,
  getCategories,
  getRecommendedForYou,
  findByCategory,
  findById,
  findBySearchText,
};
