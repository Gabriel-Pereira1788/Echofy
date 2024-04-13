import Realm from 'realm';

import {DatabaseSchemaImpl, Schemas} from '../../../../types';

import {create, deleteData, read, update} from './crud';

export function buildBookSectionSchema(
  realm: Realm,
): DatabaseSchemaImpl<Schemas.BookSection> {
  return {
    schemaName: Schemas.BookSection,
    create: create(realm),
    delete: deleteData(realm),
    read: read(realm),
    update: update(realm),
  };
}
