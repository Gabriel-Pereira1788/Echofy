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
    const review = realm.create(Schemas.Review, {
      name: Schemas.Review,
      ...value,
    });

    const _author = realm.create(Schemas.Author, {
      _id: new BSON.ObjectID(),
      name: Schemas.Author,
      author_name: value.author.name,
      profile_image: value.author.profile_image,
    });
    review.author = _author;
    return review as IReviewSchema;
  };
}
