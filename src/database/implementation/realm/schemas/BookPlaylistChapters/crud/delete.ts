import {Schemas} from '../../../../../types';

export function deleteData(realm: Realm) {
  return (id: string) => {
    const playlistChapters = realm
      .objects(Schemas.BookPlaylistChapters)
      .filtered('_id == $0', id);

    if (playlistChapters && playlistChapters.length) {
      const playlistChapterToDelete = playlistChapters[0];

      realm.delete(playlistChapterToDelete);
    }
  };
}
