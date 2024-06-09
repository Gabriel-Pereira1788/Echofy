import Realm, {BSON} from 'realm';

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

    for (let i = 0; i < value.playlist_chapters.length - 1; i++) {
      const chapter = value.playlist_chapters[i];
      const chapterData = realm.create(Schemas.BookPlaylistChapters, {
        _id: new BSON.ObjectID().toString(),
        name: Schemas.BookPlaylistChapters,
        chapter: chapter.chapter,
        local_src: chapter.local_src,
        src: chapter.src,
      }) as IBookPlaylistChapters;

      if (chapterData) {
        book.playlist_chapters.push(chapterData);
      }
    }

    return book as IBookSchema;
  };
}
