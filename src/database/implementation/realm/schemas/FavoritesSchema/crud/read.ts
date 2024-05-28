import Realm from 'realm';

import {IFavoriteSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function read(realm: Realm) {
  return () => {
    const result = realm.objects<IFavoriteSchema>(Schemas.Favorite);
    return result as unknown as CrudSchemaData<Schemas.Favorite>[];
  };
}
