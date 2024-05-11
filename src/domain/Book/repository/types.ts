import {CrudSchemaData, Schemas} from '@database';
import {PaginatedDocs} from '@infra';

import {QueryParams} from '../../types';
import {CategoryIdentify, IBookExternalData} from '../book-types';

export type QueryByCategory = {
  category: CategoryIdentify;
  uid: string;
} & QueryParams;
export type QueryRecommended = {uid: string} & QueryParams;
export type QuerySearchByText = {searchText: string} & QueryParams;

export interface BookRepository {
  getReadBookText: (id: string) => Promise<{text: string}>;
  getCategories: () => Promise<string[]>;
  getRecommendedForYou: (
    query: QueryRecommended,
  ) => Promise<PaginatedDocs<IBookExternalData> | null>;
  getBestSeller: (
    query: QueryParams,
  ) => Promise<PaginatedDocs<IBookExternalData> | null>;
  findByCategory: (
    query: QueryByCategory,
  ) => Promise<PaginatedDocs<IBookExternalData> | null>;
  findBySearchText: (
    query: QuerySearchByText,
  ) => Promise<PaginatedDocs<IBookExternalData> | null>;
  findById: (id: string) => Promise<IBookExternalData | null>;
  create<SchemaName extends Schemas>(
    schema: SchemaName,
    data: CrudSchemaData<SchemaName> | CrudSchemaData<SchemaName>[],
  ): void;
}
