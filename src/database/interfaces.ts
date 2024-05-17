import {IReviewExternalData} from '@models';

export interface IBookCategorySchema {
  _id?: string;
  text: string;
}

export interface IBookSchema {
  id: string;
  book_image: string;
  book_title: string;
  book_genres: string[];
  book_desc: string;
  book_star_raiting: string;
  book_read_link: string;
  book_author: string;
  playlist_chapters: any[]; //TODO remover any type
}

export interface IBookPlaylistChapters {
  _id?: string;
  chapter: number;
  src: string;
}

export interface IUserSchema {
  id: string;
  isValid?: boolean;
  birthDate: string;
  email: string;
  token: string;
  firstLogin?: boolean;
  userCategories?: string[];
}

export interface IReviewSchema extends IReviewExternalData {
  id?: string;
  local_id?: string;
  book_id: string;
  author: {name: string; profile_image?: string; author_name?: string};
  vote_rating: number;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}
