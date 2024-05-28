import Realm, {BSON, ObjectSchema} from 'realm';

import {Schemas} from '../../../../types';

export class FavoriteSchema extends Realm.Object<FavoriteSchema> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: Schemas.Favorite,
    properties: {
      id: {type: 'string'},
      uid: {type: 'string'},
      book_id: {type: 'string'},
      book: {type: 'object', objectType: Schemas.Book},
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: 'id',
  };
}
