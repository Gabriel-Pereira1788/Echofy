import Realm from 'realm';

import {Schemas} from '../../../../../types';

export function deleteData(realm: Realm) {
  return (id: string) => {
    const results = realm.objects(Schemas.Favorite).filtered('id == $0', id);
    if (results && results.length) {
      const favoriteDataToDelete = results[0];

      realm.delete(favoriteDataToDelete);
    }
  };
}
