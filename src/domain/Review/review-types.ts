export interface Author {
  name: string;
  author_name?: string;
  profile_image?: string;
}

export interface ReviewDTO {
  author: Author;
  content: string;
  vote_rating: number;
}

export interface Review {
  id: string;
  author: Omit<Author, 'author_name'>;
  content: string;
  voteRating: number;
}

export interface IReviewExternalData {
  id: string;
  book_id: string;
  author: Author;
  vote_rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}
