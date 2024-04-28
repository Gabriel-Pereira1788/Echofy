export interface Author {
  name: string;
  profile_image: string;
}

export interface ReviewApi {
  id: string;
  book_id: string;
  author: Author;
  vote_rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  author: Author;
  content: string;
  voteRating: number;
}
