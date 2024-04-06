import {IBookCategorySchema, Schemas, database} from '@infra';
import {QueryParams} from 'src/domain/types';

import {BookApi, BookSectionApi} from '../book-types';

import {
  BookRepository,
  QueryByCategory,
  QueryRecommended,
  QuerySearchByText,
} from './types';

async function getCategories() {
  console.log('ENTROU GET CATEGORIES');
  const results = await database.getAll<IBookCategorySchema[]>(
    Schemas.BookCategory,
  );
  console.log('SAIU GET CATEGORIES', results);
  const categories = results.map(data => data.text);
  return categories;
}

async function getRecommendedForYou(
  query: QueryRecommended,
): Promise<BookSectionApi> {
  console.log(query);
  return {
    docs: [],
    nextPage: 0,
    page: 1,
    prevPage: 1,
    totalDocs: 1,
    totalPages: 1,
  };
}

async function getBestSeller(query: QueryParams): Promise<BookSectionApi> {
  console.log(query);

  return {
    docs: [],
    nextPage: 0,
    page: 1,
    prevPage: 1,
    totalDocs: 1,
    totalPages: 1,
  };
}

async function findByCategory(query: QueryByCategory): Promise<BookSectionApi> {
  console.log(query);

  return {
    docs: [],
    nextPage: 0,
    page: 1,
    prevPage: 1,
    totalDocs: 1,
    totalPages: 1,
  };
}

async function findBySearchText(
  query: QuerySearchByText,
): Promise<BookSectionApi> {
  console.log(query);

  return {
    docs: [],
    nextPage: 0,
    page: 1,
    prevPage: 1,
    totalDocs: 1,
    totalPages: 1,
  };
}

async function findById(id: string): Promise<BookApi> {
  console.log(id);

  return {
    book_author: '',
    book_desc: '',
    book_genres: [''],
    book_image: '',
    book_read_link: '',
    book_star_raiting: '',
    book_title: '',
    id: '',
    playlist_chapters: [],
  };
}

function create<TData>(
  schema: Schemas,
  data: Partial<TData> | Partial<TData>[],
) {
  try {
    if (Array.isArray(data)) {
      data.forEach(value => {
        database.create(schema, value);
      });
    } else {
      database.create(schema, data);
    }
  } catch (error) {
    console.log('ERROR ON CREATE', error);
  }
}
export const bookLocalRepository: BookRepository = {
  getCategories,
  getRecommendedForYou,
  getBestSeller,
  findByCategory,
  findBySearchText,
  findById,
  create,
};