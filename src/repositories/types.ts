import {BookGetQuery, BookRepository} from './entities/Book/types';
import {CategoryRepository} from './entities/Category/types';
import {FavoriteGetQuery, FavoriteRepository} from './entities/Favorites/types';
import {ReviewGetQuery, ReviewRepository} from './entities/Review/types';

export type EntityName = 'review' | 'book' | 'category' | 'favorites';

export type EntityRepository<Name = EntityName> = Name extends 'review'
  ? ReviewRepository
  : Name extends 'book'
  ? BookRepository
  : Name extends 'category'
  ? CategoryRepository
  : Name extends 'favorites'
  ? FavoriteRepository
  : unknown;

export interface Entity {
  api: Omit<RepoImpl, 'create'>;
  local: RepoImpl;
}

export type Action = 'CREATE' | 'DELETE' | 'UPDATE';
export type EntitySync<TData = any> = {
  entity: 'review' | 'favorites';
  action: Action;
  localId?: string;
  data?: TData;
};
export type EntityQuery<Name = EntityName> = Name extends 'review'
  ? ReviewGetQuery
  : Name extends 'book'
  ? BookGetQuery
  : Name extends 'favorites'
  ? FavoriteGetQuery
  : unknown;

type GetMethod<TQuery = any, TReturn = any> = (
  query: TQuery,
) => Promise<TReturn | null>;

export type FindByIdMethod<TReturn = unknown> = (
  id: string,
) => Promise<TReturn | null>;

export type PostMethod<TBody = any, TReturn = any> = (
  body: TBody,
) => Promise<TReturn | undefined>;

type UpdateMethod<TData = any> = (
  id: string,
  data: Partial<TData>,
) => Promise<void>;
type CreateMethod<TData = any> = (data: TData) => void;

type Delete = (id: string) => Promise<void>;
export interface RepoImpl {
  get: GetMethod;
  findById?: FindByIdMethod;
  post?: PostMethod;
  update?: UpdateMethod;
  deleteData?: Delete;
  create: CreateMethod;
}

export type ActionMode = 'local' | 'auto';
