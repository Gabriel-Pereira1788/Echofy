import {IBookPlaylistChapters} from '../../../../../interfaces';
import {Schemas} from '../../../../../types';

export function update(realm: Realm) {
  return (id: string, newData: Partial<IBookPlaylistChapters>) => {
    const playlistChapters = realm
      .objects<IBookPlaylistChapters>(Schemas.BookPlaylistChapters)
      .filtered('_id == $0', id);

    if (playlistChapters && playlistChapters.length > 0) {
      const playlistChapterToUpdate = playlistChapters[0];

      playlistChapterToUpdate.chapter = newData.chapter
        ? newData.chapter
        : playlistChapterToUpdate.chapter;

      playlistChapterToUpdate.src = newData.src
        ? newData.src
        : playlistChapterToUpdate.src;
    }
  };
}
