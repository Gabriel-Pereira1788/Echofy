import Realm from 'realm';

import {IUserSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function read(realm: Realm) {
  return () => {
    const result = realm.objects<IUserSchema>(Schemas.User);
    return result as unknown as CrudSchemaData<Schemas.User>[];
  };
}
