import Realm from 'realm';

import {IUserSchema} from '../../../../../interfaces';
import {Schemas} from '../../../../../types';

export function update(realm: Realm) {
  return (id: string, newData: Partial<IUserSchema>) => {
    const usersToUpdate = realm
      .objects<IUserSchema>(Schemas.User)
      .filtered('id == $0', id);

    if (usersToUpdate && usersToUpdate.length > 0) {
      const user = usersToUpdate[0];
      realm.write(() => {
        user.birthDate = newData.birthDate ? newData.birthDate : user.birthDate;
        user.email = newData.email ? newData.email : user.email;
        user.firstLogin = newData.firstLogin
          ? newData.firstLogin
          : user.firstLogin;
        user.userCategories = newData.userCategories
          ? newData.userCategories
          : user.userCategories;
      });
    }
  };
}
