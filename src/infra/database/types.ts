import {QueryParams} from 'src/domain/types';

import {
  IBookCategorySchema,
  IBookPlaylistChapters,
  IBookSchema,
  IBookSectionSchema,
} from './interfaces';

export interface DatabaseImpl {
  open: () => Promise<void>;
  create<TData>(schema: Schemas, data: Partial<TData>): void;
  findById<TData>(schema: Schemas, id: number): Promise<TData>;
  findBy<TData>(schema: Schemas, filter: string): Promise<TData>;
  getAll<TData>(schema: Schemas): Promise<TData>;
  read<TData>(schema: Schemas, query?: Partial<QueryParams>): Promise<TData>;
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

export type CrudSchemaData<SchemaName extends Schemas> =
  SchemaName extends Schemas.Book
    ? IBookSchema
    : SchemaName extends Schemas.BookCategory
    ? IBookCategorySchema
    : SchemaName extends Schemas.BookSection
    ? IBookSectionSchema
    : SchemaName extends Schemas.BookPlaylistChapters
    ? IBookPlaylistChapters
    : any;

export type SchemaObject<SchemaName extends Schemas> = Record<
  Schemas,
  DatabaseSchemaImpl<SchemaName>
>;
