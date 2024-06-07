import {IBookExternalData} from './Book';

export interface IFavoriteExternalData {
  id?: string;
  local_id?: string;
  uid: string;
  book_id: string;
  book?: IBookExternalData;
}
