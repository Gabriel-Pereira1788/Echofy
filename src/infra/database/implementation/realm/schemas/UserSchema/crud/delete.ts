import Realm from 'realm';

import {Schemas} from '../../../../../types';

export function deleteData(realm: Realm) {
  return (id: string) => {
    const users = realm.objects(Schemas.User).filtered('id == $0', id);
    if (users && users.length) {
      const userToDelete = users[0];
      realm.write(() => {
        realm.delete(userToDelete);
      });
    }
  };
}
