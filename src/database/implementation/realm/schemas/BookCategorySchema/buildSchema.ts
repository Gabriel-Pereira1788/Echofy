import Realm from 'realm';

import {DatabaseSchemaImpl, Schemas} from '../../../../types';

import {create, deleteData, read, update} from './crud';

export function buildBookCategorySchema(
  realm: Realm,
): DatabaseSchemaImpl<Schemas.BookCategory> {
  return {
    schemaName: Schemas.BookCategory,
    create: create(realm),
    delete: deleteData(realm),
    read: read(realm),
    update: update(realm),
  };
}
