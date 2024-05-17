import Realm, {BSON} from 'realm';

import {IReviewSchema} from '../../../../../interfaces';
import {CrudSchemaData, Schemas} from '../../../../../types';

export function create(realm: Realm) {
  return (value: CrudSchemaData<Schemas.Review>): IReviewSchema | null => {
    const results = realm
      .objects(Schemas.Review)
      .filtered('id == $0', value.id);

    if (results && results.length > 0) {
      return null;
    }

    if (!value.id) {
      const id = new BSON.ObjectID().toString();

      value.id = id;
      value.local_id = id;
    }

    const _author = realm.create(Schemas.Author, {
      _id: new BSON.ObjectID(),
      name: Schemas.Author,
      author_name:
        'author_name' in value.author
          ? value.author.author_name
          : value.author.name,
      profile_image: value.author.profile_image,
    });

    const review = realm.create(Schemas.Review, {
      name: Schemas.Review,
      ...value,
      author: _author,
    });

    return review as IReviewSchema;
  };
}
