import Realm, {BSON, ObjectSchema} from 'realm';

import {Schemas} from '../../../../types';

export class BookPlaylistChapters extends Realm.Object<BookPlaylistChapters> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: Schemas.BookPlaylistChapters,
    properties: {
      _id: 'objectId',
      chapter: {type: 'int'},
      src: {type: 'string'},
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}
