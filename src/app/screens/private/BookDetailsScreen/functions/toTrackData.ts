import {Book} from '@domain';
import {Track} from '@infra';

export function toTrackData(bookData: Book | undefined): Track[] {
  if (!bookData) {
    return [];
  }
  return bookData.playlistChapters.map((data, index) => ({
    bookId: bookData.id,
    chapterNumber: index,
    artist: bookData.bookAuthor,
    artwork: bookData.bookImage,
    title: `${bookData.bookTitle} - ${data.chapter + 1}`,
    url: data.localSrc ? data.localSrc : data.src.replace('http', 'https'),
  }));
}
