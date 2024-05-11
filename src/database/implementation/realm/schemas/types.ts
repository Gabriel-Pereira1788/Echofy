import Realm from 'realm';

import {DatabaseSchemaImpl, Schemas} from '../../../types';

export type RealmSchema<Schema> = {
  schema: Schema;
  buildSchema?: (realm: Realm) => DatabaseSchemaImpl<Schemas>;
};
