import Realm from 'realm';

import {schemas} from '../..';
import {IBookPlaylistChapters, IBookSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function create(realm: Realm) {
  return (value: CrudSchemaData<Schemas.Book>): IBookSchema | null => {
    const results = realm.objects(Schemas.Book).filtered('id == $0', value.id);
    if (results && results.length > 0) {
      return null;
    }
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
      const chapterData = bookPlaylistChaptersSchema.create(chapter);
      if (chapterData) {
        book.playlist_chapters.push(chapterData);
      }
    }

    return book as IBookSchema;
  };
}
