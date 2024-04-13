import {Schemas} from '@infra';
import {CrudSchemaData} from 'src/infra/database/types';

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
  getRecommendedForYou: (
    query: QueryRecommended,
  ) => Promise<BookSectionApi | null>;
  getBestSeller: (query: QueryParams) => Promise<BookSectionApi>;
  findByCategory: (query: QueryByCategory) => Promise<BookSectionApi>;
  findBySearchText: (query: QuerySearchByText) => Promise<BookSectionApi>;
  findById: (id: string) => Promise<BookApi>;
  create<SchemaName extends Schemas>(
    schema: SchemaName,
    data: CrudSchemaData<SchemaName> | CrudSchemaData<SchemaName>[],
  ): void;
}
