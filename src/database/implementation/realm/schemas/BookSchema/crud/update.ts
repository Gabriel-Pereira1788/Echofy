import Realm from 'realm';

import {IBookSchema} from '../../../../../interfaces';
import {Schemas} from '../../../../../types';

export function update(realm: Realm) {
  return (id: string, newData: Partial<IBookSchema>) => {
    const booksToUpdate = realm
      .objects<IBookSchema>(Schemas.Book)
      .filtered('id == $0', id);

    if (booksToUpdate && booksToUpdate.length > 0) {
      const book = booksToUpdate[0];

      book.book_author = newData.book_author
        ? newData.book_author
        : book.book_author;

      book.book_desc = newData.book_desc ? newData.book_desc : book.book_desc;
    }
  };
}
