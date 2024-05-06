import Realm, {Configuration} from 'realm';
import {QueryParams} from 'src/domain/types';

import {
  CrudSchemaData,
  DatabaseImpl,
  Filter,
  PaginatedDocs,
  Schemas,
} from '../../types';
import {toPaginatedResult} from '../../utils/toPaginatedResult';

import {buildSchemas, realmSchemas, schemas} from './schemas';

let realmDb: Realm | null = null;

const open = async (customPath?: string) => {
  const allSchemas = realmSchemas.map(item => item.schema);
  const config: Configuration = {
    schema: allSchemas,
    schemaVersion: 11,
    path: customPath ? customPath : 'bundle.realm',
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
    console.log('ERROR ON CREATE', schemaName, error);
  }
}

function findById<SchemaName extends Schemas>(
  schema: SchemaName,
  id: string,
  searchByRealmId?: boolean,
) {
  const filter = `${searchByRealmId ? '_id' : 'id'} == $0`;
  let results: CrudSchemaData<SchemaName>[] = [];
  realmDb
    ?.objects(schema)
    .filtered(filter, id)
    .forEach(item => {
      results.push(item as CrudSchemaData<SchemaName>);
    });
  return results;
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

function readPaginatedResult<SchemaName extends Schemas>(
  schema: SchemaName,
  query: Partial<QueryParams>,
  filter?: Filter<SchemaName>,
): PaginatedDocs<CrudSchemaData<SchemaName>> | null {
  let results: CrudSchemaData<SchemaName>[] = [];

  if (filter) {
    realmDb
      ?.objects(schema)
      .filtered(filter.filter, filter.valueMatch)
      .forEach(item => {
        results.push(item as CrudSchemaData<SchemaName>);
      });
  } else {
    realmDb?.objects(schema).forEach(item => {
      results.push(item as CrudSchemaData<SchemaName>);
    });
  }

  const {skip = 0, top = 10} = query;
  if (skip && top) {
    const data = toPaginatedResult<CrudSchemaData<SchemaName>>(results, query);

    return data;
  } else if (top) {
    const data = toPaginatedResult<CrudSchemaData<SchemaName>>(results, {
      skip: 0,
      top: top,
    });
    return data;
  }

  return null;
}

async function read<SchemaName extends Schemas>(
  schema: SchemaName,
  query?: Partial<QueryParams>,
  filter?: Filter<SchemaName>,
) {
  let results;
  if (filter) {
    results = realmDb
      ?.objects(schema as string)
      .filtered(filter.filter, filter.valueMatch);
  } else {
    results = realmDb?.objects(schema as string);
  }

  if (query?.skip && query.top) {
    const data = results?.slice(query.skip, query.top);
    return data as CrudSchemaData<SchemaName>;
  } else if (query?.top) {
    const data = results?.slice(0, query.top);
    return data as CrudSchemaData<SchemaName>;
  }

  return results as CrudSchemaData<SchemaName>;
}

async function reset() {
  realmDb?.write(() => {
    realmDb?.deleteAll();
  });
}
export const realmImpl: DatabaseImpl = {
  open,
  create,
  findById,
  findBy,
  getAll,
  close,
  read,
  reset,
  readPaginatedResult,
};
