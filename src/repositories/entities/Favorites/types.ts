import {QueryParams} from '@domain';
import {PaginatedDocs} from '@infra';
import {IFavoriteExternalData} from '@models';
import {RepoImpl} from 'src/repositories/types';

export interface FavoriteGetQuery extends QueryParams {
  uid?: string;
  bookId?: string;
  searchText?: string;
}
export interface FavoriteRepository extends RepoImpl {
  get(
    query: FavoriteGetQuery,
  ): Promise<PaginatedDocs<IFavoriteExternalData> | null>;
  create(data: IFavoriteExternalData): Promise<void>;
  deleteData(id: string): Promise<void>;
  post: (body: {
    book_id: string;
    uid: string;
  }) => Promise<IFavoriteExternalData | undefined>;
}
