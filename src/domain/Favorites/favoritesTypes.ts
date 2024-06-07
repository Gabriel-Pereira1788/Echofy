import {Book} from '../Book';

export interface FavoriteBook {
  id: string;
  uid: string;
  book: Book;
}
