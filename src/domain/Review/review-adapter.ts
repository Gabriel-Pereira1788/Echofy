import {PaginatedDocs, PaginatedResult} from '@infra';

import {Author, IReviewExternalData, Review} from './review-types';

function toReview(reviewExternalData: IReviewExternalData): Review {
  const author: Author =
    'author_name' in reviewExternalData.author
      ? {
          profile_image: reviewExternalData.author.profile_image,
          name: reviewExternalData.author.author_name!,
        }
      : reviewExternalData.author;
  return {
    author,
    content: reviewExternalData.content,
    id: reviewExternalData.id,
    voteRating: reviewExternalData.vote_rating,
  };
}

function toListReview(
  review: PaginatedDocs<IReviewExternalData> | null,
): PaginatedResult<Review> {
  return {
    docs: review ? review.docs.map(_review => toReview(_review)) : [],
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
