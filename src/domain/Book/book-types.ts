export interface BookApi {
  id: string;
  book_image: string;
  book_title: string;
  book_genres: string[];
  book_desc: string;
  book_star_raiting: string;
  book_read_link: string;
  book_author: string;
  playlist_chapters: PlaylistChapter[];
}

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
  text: string;
}

export interface BookSectionApi {
  docs: BookApi[];
  nextPage: number;
  page: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
}

export interface BookSection {
  identify: CategoryIdentify;
  title: string;
  books: Book[];
}

export type CategoryIdentify =
  | 'recommended-for-you'
  | 'best-seller'
  | 'fiction'
  | 'literature'
  | 'adventure'
  | 'fantasy'
  | 'fairy tales'
  | 'philosophy'
  | 'mystery';
