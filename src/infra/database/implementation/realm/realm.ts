import Realm, {Configuration} from 'realm';
import {QueryParams} from 'src/domain/types';

import {CrudSchemaData, DatabaseImpl, Schemas} from '../../types';

import {buildSchemas, realmSchemas, schemas} from './schemas';

let realmDb: Realm | null = null;

const open = async () => {
  const allSchemas = realmSchemas.map(item => item.schema);
  const config: Configuration = {
    schema: allSchemas,
    schemaVersion: 7,
    path: 'bundle.realm',
  };
  const realm = await Realm.open(config);

  buildSchemas(realm);

  realmDb = realm;
};

async function create<SchemaName extends Schemas>(
  schemaName: SchemaName,
  data: CrudSchemaData<SchemaName>,
) {
  try {
    const schema = schemas.getSchema(schemaName);
    realmDb?.write(() => {
      schema.create(data);
    });
  } catch (error) {
    console.log('ERROR ON CREATE', error);
  }
}

async function findById<TData>(schema: Schemas, id: number) {
  const result = await realmDb?.objects(schema).filtered(`id === ${id}`);
  return result as TData;
}

async function findBy<TData>(schema: Schemas, filter: string) {
  const result = await realmDb?.objects(schema).filtered(filter);
  return result as TData;
}

async function getAll<TData>(schema: Schemas) {
  const result = await realmDb?.objects(schema);
  return result as TData;
}

function close() {
  realmDb?.close();
}

async function read<TData>(schema: Schemas, query?: Partial<QueryParams>) {
  const results = realmDb?.objects(schema);

  if (query?.skip && query.top) {
    const data = results?.slice(query.skip, query.top);
    return data as TData;
  } else if (query?.top) {
    const data = results?.slice(0, query.top);
    return data as TData;
  }

  return results as TData;
}
export const realmImpl: DatabaseImpl = {
  open,
  create,
  findById,
  findBy,
  getAll,
  close,
  read,
};
