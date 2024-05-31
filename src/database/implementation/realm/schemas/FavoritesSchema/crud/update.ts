import Realm from 'realm';

import {IFavoriteSchema} from '../../../../../interfaces';
import {Schemas} from '../../../../../types';

export function update(realm: Realm) {
  return (id: string, newData: Partial<IFavoriteSchema>) => {
    const favoriteDataToUpdate = realm
      .objects<IFavoriteSchema>(Schemas.Favorite)
      .filtered('id == $0', id);

    if (favoriteDataToUpdate && favoriteDataToUpdate.length > 0) {
      const data = favoriteDataToUpdate[0];
      data.uid = newData.uid ? newData.uid : data.uid;
      data.book = newData.book ? newData.book : data.book;
    }
  };
}
