import Realm, {BSON} from 'realm';

import {CrudSchemaData, Schemas} from '../../../../../types';

export function create(realm: Realm) {
  return (value: CrudSchemaData<Schemas.BookCategory>) => {
    const bookCategorySchema = realm.create(Schemas.BookCategory, {
      name: Schemas.Book,
      _id: new BSON.ObjectID().toString(),
      ...value,
    });

    return bookCategorySchema;
  };
}
