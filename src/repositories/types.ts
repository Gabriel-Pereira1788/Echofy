export type EntityName = 'review' | 'book' | 'category' | 'favorites';

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
