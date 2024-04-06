import Realm, {BSON, ObjectSchema} from 'realm';

import {Schemas} from '../../../types';

export class BookSectionSchema extends Realm.Object<BookSectionSchema> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: Schemas.BookSection,
    properties: {
      _id: 'objectId',
      docs: {type: 'list', objectType: Schemas.Book},
      nextPage: {type: 'int'},
      page: {type: 'int'},
      prevPage: {type: 'int'},
      totalDocs: {type: 'int'},
      totalPages: {type: 'int'},
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}
