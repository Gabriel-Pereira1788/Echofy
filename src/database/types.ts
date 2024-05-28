import {PaginatedDocs} from '@infra';
import {QueryParams} from 'src/domain/types';

import {
  IBookCategorySchema,
  IBookPlaylistChapters,
  IBookSchema,
  IFavoriteSchema,
  IReviewSchema,
} from './interfaces';

export interface DatabaseImpl {
  open: (customPath?: string) => Promise<void>;
  reset: () => Promise<void>;
  create<SchemaName extends Schemas>(
    schema: SchemaName,
    data: CrudSchemaData<SchemaName>,
  ): Promise<CrudSchemaData<SchemaName> | undefined>;
  update<SchemaName extends Schemas>(
    schemaName: SchemaName,
    id: string,
    data: Partial<CrudSchemaData<SchemaName>>,
  ): Promise<void>;
  deleteData<SchemaName extends Schemas>(
    schema: SchemaName,
    id: string,
  ): Promise<void>;
  findById<SchemaName extends Schemas>(
    schema: SchemaName,
    id: string,
  ): CrudSchemaData<SchemaName>[];
  findBy<TData>(schema: Schemas, filter: string): Promise<TData>;
  getAll<TData>(schema: Schemas): Promise<TData[]>;
  read<SchemaName extends Schemas>(
    schema: SchemaName,
    query?: Partial<QueryParams>,
    filter?: Filter<SchemaName>,
  ): Promise<CrudSchemaData<SchemaName> | CrudSchemaData<SchemaName>[]>;
  readPaginatedResult<SchemaName extends Schemas>(
    schema: SchemaName,
    query?: Partial<QueryParams>,
    filter?: Filter<SchemaName>,
  ): PaginatedDocs<CrudSchemaData<SchemaName>> | null;
  close: () => void;
}

export enum Schemas {
  BookCategory = '@BookCategorySchema',
  BookPlaylistChapters = '@BookPlaylistChapters',
  Book = '@BookSchema',
  BookSection = '@BookSectionSchema',
  Review = '@ReviewSchema',
  Author = '@AuthorSchema',
  Favorite = '@FavoriteSchema',
}

export interface DatabaseSchemaImpl<SchemaName extends Schemas> {
  schemaName: SchemaName;
  create(value: CrudSchemaData<SchemaName>): CrudSchemaData<SchemaName> | null;
  delete: (id: string) => void;
  read(): CrudSchemaData<SchemaName>[];
  update(id: string, newData: Partial<CrudSchemaData<SchemaName>>): void;
}

export type CrudSchemaData<SchemaName = Schemas> =
  SchemaName extends Schemas.Book
    ? IBookSchema
    : SchemaName extends Schemas.BookCategory
    ? IBookCategorySchema
    : SchemaName extends Schemas.BookPlaylistChapters
    ? IBookPlaylistChapters
    : SchemaName extends Schemas.Review
    ? IReviewSchema
    : SchemaName extends Schemas.Favorite
    ? IFavoriteSchema
    : unknown;

export type SchemaObject<SchemaName extends Schemas> = Record<
  Schemas,
  DatabaseSchemaImpl<SchemaName>
>;

export interface Filter<
  SchemaName = Schemas,
  Key = keyof CrudSchemaData<SchemaName>,
  ValueMatch = unknown,
> {
  field?: Key;
  valueMatch: ValueMatch[];
  filter: string;
}
