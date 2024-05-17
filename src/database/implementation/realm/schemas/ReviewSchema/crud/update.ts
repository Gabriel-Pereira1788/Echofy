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

      review.book_id = newData.book_id ? newData.book_id : review.book_id;
      review.vote_rating = newData.vote_rating
        ? newData.vote_rating
        : review.vote_rating;

      review.author.author_name = newData.author?.author_name
        ? newData.author.author_name
        : review.author.author_name;
      review.author.name = newData.author?.name
        ? newData.author.name
        : review.author.name;
      review.author.profile_image = newData.author?.profile_image
        ? newData.author.profile_image
        : review.author.profile_image;
      review.content = newData.content ? newData.content : review.content;
    }
  };
}
