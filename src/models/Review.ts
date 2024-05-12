export interface IReviewExternalData {
  id: string;
  book_id: string;
  author: {name: string; author_name?: string; profile_image?: string};
  vote_rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewDTO {
  author: {name: string; author_name?: string; profile_image?: string};
  content: string;
  vote_rating: number;
}
