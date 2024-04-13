import Realm from 'realm';

import {DatabaseSchemaImpl, Schemas} from '../../../../types';

import {create, deleteData, read, update} from './crud';

export function buildBookPlaylistChapters(
  realm: Realm,
): DatabaseSchemaImpl<Schemas.BookPlaylistChapters> {
  return {
    schemaName: Schemas.BookPlaylistChapters,
    create: create(realm),
    delete: deleteData(realm),
    read: read(realm),
    update: update(realm),
  };
}
