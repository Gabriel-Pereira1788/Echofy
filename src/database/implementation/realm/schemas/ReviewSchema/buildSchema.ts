import Realm from 'realm';

import {DatabaseSchemaImpl, Schemas} from '../../../../types';

import {create, deleteData, read, update} from './crud';

export function buildReviewSchema(
  realm: Realm,
): DatabaseSchemaImpl<Schemas.Review> {
  return {
    schemaName: Schemas.Review,
    create: create(realm),
    delete: deleteData(realm),
    read: read(realm),
    update: update(realm),
  };
}
