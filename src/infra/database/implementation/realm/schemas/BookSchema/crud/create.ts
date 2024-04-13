import Realm from 'realm';
import {
  IBookPlaylistChapters,
  IBookSchema,
} from 'src/infra/database/interfaces';

import {schemas} from '../..';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function create(realm: Realm) {
  return (value: CrudSchemaData<Schemas.Book>): IBookSchema => {
    const book = realm.create(Schemas.Book, {
      name: Schemas.Book,
      ...value,
      playlist_chapters: [] as IBookPlaylistChapters[],
    });
    const bookPlaylistChaptersSchema = schemas.getSchema(
      Schemas.BookPlaylistChapters,
    );

    for (let i = 0; i < value.playlist_chapters.length - 1; i++) {
      const chapter = value.playlist_chapters[i];
      book.playlist_chapters.push(bookPlaylistChaptersSchema.create(chapter));
    }

    return book as IBookSchema;
  };
}
