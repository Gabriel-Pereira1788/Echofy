import {BSON} from 'realm';

import {IBookPlaylistChapters} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function create(realm: Realm) {
  return (value: CrudSchemaData<Schemas.BookPlaylistChapters>) => {
    console.log('VALUE', value);
    const item = realm.create(Schemas.BookPlaylistChapters, {
      _id: new BSON.ObjectID(),
      name: Schemas.BookPlaylistChapters,
      ...value,
    });

    return item as IBookPlaylistChapters;
  };
}
