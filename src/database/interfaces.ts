import {IBookExternalData, IReviewExternalData} from '@models';

export interface IBookCategorySchema {
  _id?: string;
  text: string;
}

export interface IBookSchema extends IBookExternalData {}

export interface IBookPlaylistChapters {
  _id?: string;
  chapter: number;
  src: string;
  local_src?: string;
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
