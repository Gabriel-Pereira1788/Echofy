import Realm, {BSON, ObjectSchema} from 'realm';

import {Schemas} from '../../../../types';

export class ReviewSchema extends Realm.Object<ReviewSchema> {
  _id!: BSON.ObjectId;
  name!: string;

  static schema: ObjectSchema = {
    name: Schemas.Review,
    properties: {
      id: {type: 'string'},
      book_id: {type: 'string'},
      local_id: {type: 'string', optional: true},
      author: {type: 'object', objectType: Schemas.Author, optional: true},
      vote_rating: {type: 'int'},
      content: {type: 'string'},
      createdAt: {type: 'string', optional: true},
      updatedAt: {type: 'string', optional: true},
    },
    primaryKey: 'id',
  };
}

export class AuthorSchema extends Realm.Object<AuthorSchema> {
  _id!: BSON.ObjectId;
  name!: string;

  static schema: ObjectSchema = {
    name: Schemas.Author,
    properties: {
      _id: 'objectId',
      author_name: {type: 'string'},
      profile_image: {type: 'string', optional: true},
    },
    primaryKey: '_id',
  };
}
