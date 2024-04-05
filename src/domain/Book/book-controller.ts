import {QueryParams} from '../types';

import {BookRepository, bookApi, bookSchema} from './repository';

async function getBestSeller(query: QueryParams) {
  const data = await bookSchema.getBestSeller(query);
  if (!data) {
    const result = await bookApi.getBestSeller(query);
    //CRIAR NO BANCO DE DADOS
    return result;
  } else {
    return data;
  }
}

const getCategories: BookRepository['getCategories'] = async () => {
  const result = await bookApi.getCategories();
  return result;
};

const getRecommendedForYou: BookRepository['getRecommendedForYou'] =
  async query => {
    const result = await bookApi.getRecommendedForYou(query);
    return result;
  };

const findByCategory: BookRepository['findByCategory'] = async query => {
  const result = await bookApi.findByCategory(query);
  return result;
};

const findBySearchText: BookRepository['findBySearchText'] = async query => {
  const result = await bookApi.findBySearchText(query);
  return result;
};

const findById: BookRepository['findById'] = async query => {
  const result = await bookApi.findById(query);
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
