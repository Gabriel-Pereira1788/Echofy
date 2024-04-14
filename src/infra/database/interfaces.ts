export interface IBookCategorySchema {
  text: string;
}

export interface IBookSectionSchema {
  docs: IBookSchema[];
  nextPage: number | null;
  page: number;
  prevPage: number | null;
  totalDocs: number;
  totalPages: number;
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
  chapter: number;
  src: string;
}
