import {QueryParams} from 'src/domain/types';

import {BookApi, BookSectionApi} from '../../book-types';
import {
  BookRepository,
  QueryByCategory,
  QueryRecommended,
  QuerySearchByText,
} from '../types';

async function getCategories() {
  return [''];
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

export const bookSchema: BookRepository = {
  getCategories,
  getRecommendedForYou,
  getBestSeller,
  findByCategory,
  findBySearchText,
  findById,
};
