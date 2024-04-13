import Realm from 'realm';

import {IBookSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function read(realm: Realm) {
  return () => {
    const result = realm.objects<IBookSchema>(Schemas.Book);
    return result as unknown as CrudSchemaData<Schemas.Book>[];
  };
}
