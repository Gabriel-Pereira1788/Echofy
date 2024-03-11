import {Book} from '@domain';
import {Track} from '@services';

export function toTrackData(bookData: Book | undefined): Track[] {
  if (!bookData) {
    return [];
  }
  return bookData.playlistChapters.map((data, index) => ({
    chapterNumber: index,
    artist: bookData.bookAuthor,
    artwork: bookData.bookImage,
    title: `${bookData.bookTitle} - ${data.chapter + 1}`,
    url: data.src.replace('http', 'https'),
  }));
}
