export interface BookApi {
  id: string;
  book_image: string;
  book_title: string;
  book_genres: string[];
  book_desc: string;
  playlist_chapters: {chapter: number; src: string}[];
}

export interface BookCategory {
  isSelected: boolean;
  text: string;
}
