import Realm, {BSON, ObjectSchema} from 'realm';

import {Schemas} from '../../../../types';

export class BookCategorySchema extends Realm.Object<BookCategorySchema> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: Schemas.BookCategory,
    properties: {
      _id: 'string',
      text: {type: 'string'},
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}
