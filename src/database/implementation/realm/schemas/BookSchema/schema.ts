import Realm, {BSON, ObjectSchema} from 'realm';

import {Schemas} from '../../../../types';

export class BookSchema extends Realm.Object<BookSchema> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: Schemas.Book,
    properties: {
      id: {type: 'string'},
      book_image: {type: 'string'},
      local_id: {type: 'string', optional: true},
      book_title: {type: 'string'},
      book_genres: {type: 'list', objectType: 'string'},
      book_desc: {type: 'string'},
      book_star_raiting: {type: 'string'},
      book_read_link: {type: 'string'},
      book_author: {type: 'string'},
      playlist_chapters: {
        type: 'list',
        objectType: Schemas.BookPlaylistChapters,
      },
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: 'id',
  };
}

export class BookPlaylistChaptersSchema extends Realm.Object<BookPlaylistChaptersSchema> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: Schemas.BookPlaylistChapters,
    properties: {
      _id: 'objectId',
      chapter: {type: 'int'},
      src: {type: 'string'},
      local_src: {type: 'string', optional: true},
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}
