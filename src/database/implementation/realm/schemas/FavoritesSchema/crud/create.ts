import Realm, {BSON} from 'realm';

import {IBookSchema, IFavoriteSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function create(realm: Realm) {
  return (value: CrudSchemaData<Schemas.Favorite>): IFavoriteSchema | null => {
    const results = realm
      .objects(Schemas.Favorite)
      .filtered('id == $0', value.id);

    if (results && results.length > 0) {
      return null;
    }

    const bookData = realm
      .objects<IBookSchema>(Schemas.Book)
      .filtered('id == $0', value.book_id);

    const favoriteData = realm.create(Schemas.Favorite, {
      name: Schemas.Favorite,
      id: value.id ? value.id : new BSON.ObjectID().toString(),
      uid: value.uid,
      book_id: value.book_id,
      book: bookData && bookData.length > 0 ? bookData[0] : value.book,
    });

    return favoriteData as IFavoriteSchema;
  };
}
