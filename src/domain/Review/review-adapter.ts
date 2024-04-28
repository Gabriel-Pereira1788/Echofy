import {PaginatedDocs, PaginatedResult} from '@infra';

import {Review, ReviewApi} from './review-types';

function toReview(reviewApi: ReviewApi): Review {
  return {
    author: reviewApi.author,
    content: reviewApi.content,
    id: reviewApi.id,
    voteRating: reviewApi.vote_rating,
  };
}

function toListReview(
  review: PaginatedDocs<ReviewApi>,
): PaginatedResult<Review> {
  return {
    docs: review.docs.map(_review => toReview(_review)),
    meta: {
      nextPage: review?.nextPage || null,
      page: review?.page || 0,
      prevPage: review?.prevPage || null,
      totalDocs: review?.totalDocs || 0,
      totalPages: review?.totalPages || 0,
    },
  };
}

export const reviewAdapter = {toListReview, toReview};
