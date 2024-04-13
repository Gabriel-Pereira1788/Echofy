import Realm from 'realm';

import {CrudSchemaData, Schemas} from '../../../../../types';

export function create(realm: Realm) {
  return (value: CrudSchemaData<Schemas.BookCategory>) => {
    const bookCategorySchema = realm.create(Schemas.BookCategory, {
      name: Schemas.Book,
      ...value,
    });

    return bookCategorySchema;
  };
}
