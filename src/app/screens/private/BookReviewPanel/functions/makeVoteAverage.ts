import {Review} from '@domain';

export function makeVoteAverage(reviews?: Review[]) {
  const totalVoteRating =
    reviews && reviews.reduce((acc, review) => (acc += review.voteRating), 0);

  const voteAverage = reviews ? totalVoteRating! / reviews.length : 0;

  return voteAverage > 5 ? '5.0' : voteAverage.toFixed(1);
}
