import Realm from 'realm';

import {Schemas} from '../../../../../types';

export function deleteData(realm: Realm) {
  return (id: string) => {
    const reviews = realm.objects(Schemas.Review).filtered('id == $0', id);
    if (reviews && reviews.length) {
      const reviewToDelete = reviews[0];

      realm.delete(reviewToDelete);
    }
  };
}
