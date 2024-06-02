import {realmImpl} from './implementation';
import {DatabaseImpl} from './types';

export let database: DatabaseImpl = realmImpl;

export function setDatabaseImpl(databaseImpl: DatabaseImpl) {
  database = databaseImpl;
}
