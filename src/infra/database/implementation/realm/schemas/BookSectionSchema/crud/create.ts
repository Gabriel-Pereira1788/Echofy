import Realm, {BSON} from 'realm';
import {IBookSchema} from 'src/infra/database/interfaces';

import {schemas} from '../..';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function create(realm: Realm) {
  return (value: CrudSchemaData<Schemas.BookSection>) => {
    const bookSection = realm.create(Schemas.BookSection, {
      name: Schemas.BookSection,
      _id: new BSON.ObjectID(),
      ...value,
      docs: [] as IBookSchema[],
    });

    const bookSchema = schemas.getSchema(Schemas.Book);
    for (let i = 0; i < value.docs.length; i++) {
      const bookToCreate = value.docs[i];
      bookSection.docs.push(bookSchema.create(bookToCreate));
    }

    return bookSection;
  };
}
