import Realm from 'realm';

import {IReviewSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function read(realm: Realm) {
  return () => {
    const result = realm.objects<IReviewSchema>(Schemas.Review);
    return result as unknown as CrudSchemaData<Schemas.Review>[];
  };
}
