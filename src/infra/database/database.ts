import {DatabaseImpl} from './types';

export let database: DatabaseImpl;

export async function setDatabaseImpl(databaseImpl: DatabaseImpl) {
  database = databaseImpl;
}
