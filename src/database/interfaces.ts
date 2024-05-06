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
