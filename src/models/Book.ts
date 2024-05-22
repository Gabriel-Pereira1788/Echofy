export interface IBookExternalData {
  id: string;
  book_image: string;
  book_title: string;
  book_genres: string[];
  book_desc: string;
  book_star_raiting: string;
  book_read_link: string;
  book_author: string;
  playlist_chapters: PlaylistChapterExternalData[];
}

export interface PlaylistChapterExternalData {
  chapter: number;
  src: string;
  local_src?: string;
}
