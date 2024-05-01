import Realm from 'realm';

import {IBookCategorySchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function read(realm: Realm) {
  return () => {
    const result = realm.objects<IBookCategorySchema>(Schemas.BookCategory);
    return result as unknown as CrudSchemaData<Schemas.BookCategory>[];
  };
}
