import Realm from 'realm';

import {DatabaseSchemaImpl, Schemas} from '../../../../types';

import {create, deleteData, read, update} from './crud';

export function buildFavoriteSchema(
  realm: Realm,
): DatabaseSchemaImpl<Schemas.Favorite> {
  return {
    schemaName: Schemas.Favorite,
    create: create(realm),
    delete: deleteData(realm),
    read: read(realm),
    update: update(realm),
  };
}
