import {Schemas} from '@infra';

import {QueryParams} from '../../types';
import {BookApi, BookSectionApi, CategoryIdentify} from '../book-types';

export type QueryByCategory = {
  category: CategoryIdentify;
  uid: string;
} & QueryParams;
export type QueryRecommended = {uid: string} & QueryParams;
export type QuerySearchByText = {searchText: string} & QueryParams;

export interface BookRepository {
  getCategories: () => Promise<string[]>;
  getRecommendedForYou: (query: QueryRecommended) => Promise<BookSectionApi>;
  getBestSeller: (query: QueryParams) => Promise<BookSectionApi>;
  findByCategory: (query: QueryByCategory) => Promise<BookSectionApi>;
  findBySearchText: (query: QuerySearchByText) => Promise<BookSectionApi>;
  findById: (id: string) => Promise<BookApi>;
  create<TData>(schema: Schemas, data: Partial<TData>): void;
}
