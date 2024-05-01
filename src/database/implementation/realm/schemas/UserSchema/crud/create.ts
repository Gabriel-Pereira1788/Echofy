import Realm from 'realm';

import {IUserSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function create(realm: Realm) {
  return (value: CrudSchemaData<Schemas.User>): IUserSchema | null => {
    const results = realm.objects(Schemas.User).filtered('id == $0', value.id);
    if (results && results.length > 0) {
      return null;
    }

    const user = realm.create(Schemas.User, {
      name: Schemas.User,
      ...value,
    });

    return user as IUserSchema;
  };
}
