import {IBookSchema, Schemas} from '@infra';
import {CrudSchemaData, PaginatedDocs} from 'src/infra/database/types';

import {QueryParams} from '../../types';
import {CategoryIdentify} from '../book-types';

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
  ) => Promise<PaginatedDocs<IBookSchema> | null>;
  getBestSeller: (
    query: QueryParams,
  ) => Promise<PaginatedDocs<IBookSchema> | null>;
  findByCategory: (
    query: QueryByCategory,
  ) => Promise<PaginatedDocs<IBookSchema> | null>;
  findBySearchText: (
    query: QuerySearchByText,
  ) => Promise<PaginatedDocs<IBookSchema> | null>;
  findById: (id: string) => Promise<IBookSchema | null>;
  create<SchemaName extends Schemas>(
    schema: SchemaName,
    data: CrudSchemaData<SchemaName> | CrudSchemaData<SchemaName>[],
  ): void;
}
