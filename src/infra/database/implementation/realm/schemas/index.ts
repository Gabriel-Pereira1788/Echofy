import Realm from 'realm';

import {SchemaObject, Schemas} from '../../../types';

import {bookCategorySchema} from './BookCategorySchema';
import {bookPlaylistChapters} from './BookPlaylistChapters';
import {bookSchema} from './BookSchema';
import {bookSectionSchema} from './BookSectionSchema';

export const realmSchemas = [
  bookSchema,
  bookCategorySchema,
  bookSectionSchema,
  bookPlaylistChapters,
];

export let mapSchemas: SchemaObject<Schemas>;

export function buildSchemas(realm: Realm) {
  for (let realmSchema of realmSchemas) {
    const schema = realmSchema.buildSchema(realm);
    mapSchemas = {
      ...mapSchemas,
      [schema.schemaName]: schema,
    };
  }

  return realmSchemas.map(schema => schema.schema);
}

function getSchema(schemaName: Schemas) {
  return mapSchemas[schemaName];
}

export const schemas = {
  buildSchemas,
  getSchema,
};
