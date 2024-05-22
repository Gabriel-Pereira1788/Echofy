import {QueryParams} from '@domain';
import {PaginatedDocs} from '@infra';

import {IBookExternalData} from '../../../models';
import {RepoImpl} from '../../types';
import {CategoryIdentify} from '../Category/types';

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
  update(id: string, body: Partial<IBookExternalData>): Promise<void>;
  create(
    data: IBookExternalData[] | {docs: IBookExternalData[]} | IBookExternalData,
  ): Promise<void>;
}
