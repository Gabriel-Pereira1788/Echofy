import Realm, {BSON} from 'realm';

import {DatabaseImpl, Schemas} from '../../types';

import {BookCategorySchema, BookSchema, BookSectionSchema} from './schemas';
const config = {
  schema: [BookSchema, BookSectionSchema, BookCategorySchema],
  path: 'bundle.realm',
};

let realmDb: Realm | null = null;

const open = async () => {
  const realm = await Realm.open(config);
  realmDb = realm;
};

async function create<TData>(schema: Schemas, data: Partial<TData>) {
  realmDb?.write(() => {
    realmDb?.create(schema, {_id: new BSON.ObjectID(), name: schema, ...data});
  });
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
export const realmImpl: DatabaseImpl = {
  open,
  create,
  findById,
  findBy,
  getAll,
  close,
};
