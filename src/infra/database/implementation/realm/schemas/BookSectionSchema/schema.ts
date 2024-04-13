import Realm, {BSON, ObjectSchema} from 'realm';

import {Schemas} from '../../../../types';

export class BookSectionSchema extends Realm.Object<BookSectionSchema> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: Schemas.BookSection,
    properties: {
      _id: 'objectId',
      docs: {type: 'list', objectType: Schemas.Book},
      nextPage: {type: 'int', optional: true},
      page: {type: 'int', optional: true},
      prevPage: {type: 'int', optional: true},
      totalDocs: {type: 'int', optional: true},
      totalPages: {type: 'int', optional: true},
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}
