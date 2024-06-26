import Realm from 'realm';

import {Schemas} from '../../../../../types';

export function deleteData(realm: Realm) {
  return (id: string) => {
    const categories = realm
      .objects(Schemas.BookCategory)
      .filtered('_id == $0', id);

    if (categories && categories.length) {
      const categoryToDelete = categories[0];

      realm.delete(categoryToDelete);
    }
  };
}
