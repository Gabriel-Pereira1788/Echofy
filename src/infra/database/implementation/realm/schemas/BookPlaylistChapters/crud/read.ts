import {IBookPlaylistChapters} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function read(realm: Realm) {
  return () => {
    const result = realm.objects<IBookPlaylistChapters>(
      Schemas.BookPlaylistChapters,
    );
    return result as unknown as CrudSchemaData<Schemas.BookPlaylistChapters>[];
  };
}
