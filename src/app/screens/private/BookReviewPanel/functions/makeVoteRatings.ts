import {Review} from '@domain';

interface VoteRatings {
  count: number;
  percentage: number;
}

export function makeVoteRatings(reviews?: Review[]): VoteRatings[] {
  if (!reviews) {
    return [];
  }
  let voteRatingCount: Record<number, number> = {};

  for (let review of reviews) {
    if (voteRatingCount[review.voteRating]) {
      voteRatingCount[review.voteRating] += 1;
    } else {
      voteRatingCount[review.voteRating] = 1;
    }
  }

  return Array.from({length: 5}).map((_, index) => {
    const count = voteRatingCount[index + 1] ? voteRatingCount[index + 1] : 0;
    return {
      count,
      percentage: voteRatingCount[index + 1]
        ? calculatePercentage(count, reviews.length)
        : 0,
    };
  });
}

function calculatePercentage(part: number, total: number) {
  return (part / total) * 100;
}
