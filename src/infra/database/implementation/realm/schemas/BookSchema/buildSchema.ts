import Realm from 'realm';

import {DatabaseSchemaImpl, Schemas} from '../../../../types';

import {create, deleteData, read, update} from './crud';

export function buildBookSchema(
  realm: Realm,
): DatabaseSchemaImpl<Schemas.Book> {
  return {
    schemaName: Schemas.Book,
    create: create(realm),
    delete: deleteData(realm),
    read: read(realm),
    update: update(realm),
  };
}
