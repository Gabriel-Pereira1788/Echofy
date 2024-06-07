import {CategoryIdentify} from '@repositories';

export type {CategoryIdentify};
import {QueryParams} from '../types';

export interface PlaylistChapter {
  chapter: number;
  src: string;
  localSrc?: string;
}

export interface Book {
  id: string;
  bookImage: string;
  bookTitle: string;
  bookGenres: string[];
  bookDesc: string;
  voteRating: number;
  bookAuthor: string;
  bookReadLink: string;
  playlistChapters: PlaylistChapter[];
}

export interface BookCategory {
  isSelected: boolean;
  text: CategoryIdentify;
}

export interface BookSection {
  identify: CategoryIdentify;
  title: string;
}

export type QueryByCategory = {
  category: CategoryIdentify;
  uid: string;
} & QueryParams;
export type QueryRecommended = {uid: string} & QueryParams;
export type QuerySearchByText = {searchText: string} & QueryParams;
