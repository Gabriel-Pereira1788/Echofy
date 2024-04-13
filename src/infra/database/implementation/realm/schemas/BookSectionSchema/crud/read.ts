import Realm from 'realm';

import {IBookSectionSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function read(realm: Realm) {
  return () => {
    const result = realm.objects<IBookSectionSchema>(Schemas.BookSection);
    return result as unknown as CrudSchemaData<Schemas.BookSection>[];
  };
}
