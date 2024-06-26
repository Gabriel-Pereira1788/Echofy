import {Track} from '@infra';

import {bookMock} from '../serverHandlers';

export const mockTrack: Track = {
  artist: 'John Doe',
  artwork: 'https://www.test.com/test.jpg',
  chapterNumber: 1,
  title: 'Chapter 1',
  url: 'https://www.test.com/',
  bookId: bookMock.id,
};
export const mockListTracks: Track[] = [
  {
    artist: 'John Doe',
    artwork: 'https://www.test.com/test.jpg',
    chapterNumber: 1,
    title: 'Chapter 1',
    url: 'https://www.test.com/',
    bookId: bookMock.id,
  },
  {
    artist: 'John Doe',
    artwork: 'https://www.test.com/test.jpg',
    chapterNumber: 2,
    title: 'Chapter 2',
    url: 'https://www.test.com/',
    bookId: bookMock.id,
  },
  {
    artist: 'John Doe',
    artwork: 'https://www.test.com/test.jpg',
    chapterNumber: 3,
    title: 'Chapter 3',
    url: 'https://www.test.com/',
    bookId: bookMock.id,
  },
];
