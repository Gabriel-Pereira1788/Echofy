import Realm from 'realm';

import {DatabaseSchemaImpl, Schemas} from '../../../../types';

import {create, deleteData, read, update} from './crud';

export function buildUserSchema(
  realm: Realm,
): DatabaseSchemaImpl<Schemas.User> {
  return {
    schemaName: Schemas.User,
    create: create(realm),
    delete: deleteData(realm),
    read: read(realm),
    update: update(realm),
  };
}
