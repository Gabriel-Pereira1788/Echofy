import Realm from 'realm';

import {Schemas} from '../../../../../types';

export function deleteData(realm: Realm) {
  return (id: string) => {
    const books = realm.objects(Schemas.Book).filtered('id == $0', id);
    if (books && books.length) {
      const bookToDelete = books[0];

      realm.delete(bookToDelete);
    }
  };
}
