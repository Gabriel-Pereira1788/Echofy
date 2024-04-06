import Realm, {BSON, ObjectSchema} from 'realm';

import {Schemas} from '../../../types';

export class BookSchema extends Realm.Object<BookSchema> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: Schemas.Book,
    properties: {
      _id: 'objectId',
      id: {type: 'string'},
      book_image: {type: 'string'},
      book_title: {type: 'string'},
      book_genres: {type: 'mixed'},
      book_desc: {type: 'string'},
      book_star_raiting: {type: 'string'},
      book_read_link: {type: 'string'},
      book_author: {type: 'string'},
      playlist_chapters: {type: 'mixed'},
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}
