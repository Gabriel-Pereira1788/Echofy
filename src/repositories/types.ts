import {BookGetQuery, BookRepository} from './Book/types';
import {CategoryRepository} from './Category/types';
import {ReviewGetQuery, ReviewRepo} from './Review/types';

export type EntityName = 'review' | 'book' | 'category';

export type EntityRepository<Name = EntityName> = Name extends 'review'
  ? ReviewRepo
  : Name extends 'book'
  ? BookRepository
  : Name extends 'category'
  ? CategoryRepository
  : unknown;

export interface Entity {
  api: Omit<RepoImpl, 'create'>;
  local: RepoImpl;
}

export type EntityQuery<Name = EntityName> = Name extends 'review'
  ? ReviewGetQuery
  : Name extends 'book'
  ? BookGetQuery
  : unknown;

type GetMethod<TQuery = any, TReturn = any> = (
  query: TQuery,
) => Promise<TReturn | null>;

export type FindByIdMethod<TReturn = unknown> = (
  id: string,
) => Promise<TReturn | null>;

export type PostMethod<TBody = any> = (body: TBody) => Promise<void>;
type CreateMethod = (data: unknown) => void;

export interface RepoImpl {
  get: GetMethod;
  findById?: FindByIdMethod;
  post?: PostMethod;
  create: CreateMethod;
}
