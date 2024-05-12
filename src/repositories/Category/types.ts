import {RepoImpl} from '../types';

export type CategoryIdentify =
  | 'recommended-for-you'
  | 'best-seller'
  | 'fiction'
  | 'literature'
  | 'adventure'
  | 'fantasy'
  | 'fairy tales'
  | 'philosophy'
  | 'mystery';

export interface CategoryRepository extends Omit<RepoImpl, 'post'> {
  get(query: unknown): Promise<string[] | null>;
  create(categories: unknown): Promise<void>;
}
