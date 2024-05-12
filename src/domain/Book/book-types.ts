import {CategoryIdentify} from '@repositories';

export type {CategoryIdentify};
import {QueryParams} from '../types';

export interface PlaylistChapter {
  chapter: number;
  src: string;
}

export interface Book {
  id: string;
  bookImage: string;
  bookTitle: string;
  bookGenres: string[];
  bookDesc: string;
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
  books: Book[];
}

export type QueryByCategory = {
  category: CategoryIdentify;
  uid: string;
} & QueryParams;
export type QueryRecommended = {uid: string} & QueryParams;
export type QuerySearchByText = {searchText: string} & QueryParams;
