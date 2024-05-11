import Realm from 'realm';

import {IReviewSchema} from '../../../../../interfaces';
import {Schemas} from '../../../../../types';

export function update(realm: Realm) {
  return (id: string, newData: Partial<IReviewSchema>) => {
    const reviewsToUpdate = realm
      .objects<IReviewSchema>(Schemas.Review)
      .filtered('id == $0', id);

    if (reviewsToUpdate && reviewsToUpdate.length > 0) {
      const review = reviewsToUpdate[0];
      (review.author = newData.author ? newData.author : review.author),
        (review.content = newData.content ? newData.content : review.content);
    }
  };
}
