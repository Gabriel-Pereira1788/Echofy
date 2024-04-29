import {Review} from '@domain';

export function makeVoteAverage(reviews?: Review[]) {
  const totalVoteRating =
    reviews && reviews.reduce((acc, review) => (acc += review.voteRating), 0);

  const voteAverage = reviews ? totalVoteRating! / reviews.length : 0;

  return voteAverage.toFixed(1);
}
