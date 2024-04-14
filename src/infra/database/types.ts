import {QueryParams} from 'src/domain/types';

import {
  IBookCategorySchema,
  IBookPlaylistChapters,
  IBookSchema,
  IBookSectionSchema,
} from './interfaces';

export interface DatabaseImpl {
  open: () => Promise<void>;
  create<SchemaName extends Schemas>(
    schema: Schemas,
    data: CrudSchemaData<SchemaName>,
  ): void;
  findById<TData>(schema: Schemas, id: number): Promise<TData>;
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
}

export interface DatabaseSchemaImpl<SchemaName extends Schemas> {
  schemaName: SchemaName;
  create(value: CrudSchemaData<SchemaName>): CrudSchemaData<SchemaName>;
  delete: (id: string) => void;
  read(): CrudSchemaData<SchemaName>[];
  update(id: string, newData: Partial<CrudSchemaData<SchemaName>>): void;
}

export type CrudSchemaData<SchemaName = Schemas> =
  SchemaName extends Schemas.Book
    ? IBookSchema
    : SchemaName extends Schemas.BookCategory
    ? IBookCategorySchema
    : SchemaName extends Schemas.BookSection
    ? IBookSectionSchema
    : SchemaName extends Schemas.BookPlaylistChapters
    ? IBookPlaylistChapters
    : unknown;

export type SchemaObject<SchemaName extends Schemas> = Record<
  Schemas,
  DatabaseSchemaImpl<SchemaName>
>;

export interface Filter<SchemaName = Schemas> {
  field: keyof CrudSchemaData<SchemaName>;
  valueMatch: string;
  filter: string;
}

export interface PaginatedDocs<TData> {
  docs: TData[];
  nextPage: number | null;
  page: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}
