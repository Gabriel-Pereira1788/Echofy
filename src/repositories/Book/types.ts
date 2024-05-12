import {QueryParams} from '@domain';
import {PaginatedDocs} from '@infra';

import {IBookExternalData} from '../../models';
import {CategoryIdentify} from '../Category/types';
import {RepoImpl} from '../types';

export type BookGetQuery = QueryParams & {
  id?: string;
  searchText?: string;
  category?: CategoryIdentify;
  uid?: string;
};

export type QueryByCategory = {
  category: CategoryIdentify;
  uid: string;
} & QueryParams;

export interface BookRepository extends Omit<RepoImpl, 'post'> {
  get(query: BookGetQuery): Promise<PaginatedDocs<IBookExternalData> | null>;
  findById(id: string): Promise<IBookExternalData | null>;
}
