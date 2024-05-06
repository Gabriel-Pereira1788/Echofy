import Realm from 'realm';

import {buildBookPlaylistChapters} from '../buildSchema';
import {BookPlaylistChapters} from '../schema';

const config = {
  schema: [BookPlaylistChapters],
  schemaVersion: 12,
  path: 'testing.realm',
};
let realm: Realm;
let bookPlaylistChaptersSchema: ReturnType<typeof buildBookPlaylistChapters>;

beforeEach(async () => {
  realm = await Realm.open(config);
  bookPlaylistChaptersSchema = buildBookPlaylistChapters(realm);
});

afterEach(() => {
  realm.write(() => {
    realm.deleteAll();
  });
  realm.close();
  if (config) {
    Realm.deleteFile(config);
  }
});
describe('BookPlaylistChapters', () => {
  it('CRUD: create playlist chapter', async () => {
    realm.write(() => {
      const playlistChapterData = bookPlaylistChaptersSchema.create({
        chapter: 1,
        src: 'http://www.chapter.com/audio.mp3',
      });
      console.log('playlistChapterData', playlistChapterData);
      expect(playlistChapterData).toBeTruthy();
    });
  });

  it('CRUD: delete playlist chapter', async () => {
    realm.write(() => {
      //1) create
      const playlistChapterData = bookPlaylistChaptersSchema.create({
        chapter: 1,
        src: 'http://www.chapter.com/audio.mp3',
      });

      expect(playlistChapterData).toBeTruthy();

      //2) verify creating correctly
      const playlistChapters = bookPlaylistChaptersSchema.read();
      expect(playlistChapters.length > 0).toBeTruthy();

      //3) delete

      bookPlaylistChaptersSchema.delete(playlistChapterData!._id ?? '');

      //4 check remove correctly
      const playlistChaptersDelete = bookPlaylistChaptersSchema.read();
      expect(playlistChaptersDelete.length === 0).toBeTruthy();
    });
  });

  it('CRUD: update playlist chapter', async () => {
    realm.write(() => {
      //1) create
      const playlistChapterData = bookPlaylistChaptersSchema.create({
        chapter: 1,
        src: 'http://www.chapter.com/audio.mp3',
      });

      expect(playlistChapterData).toBeTruthy();

      //2) verify creating correctly
      const playlistChapters = bookPlaylistChaptersSchema.read();
      expect(playlistChapters.length > 0).toBeTruthy();

      //3)update book
      bookPlaylistChaptersSchema.update(playlistChapterData?._id ?? '', {
        chapter: 2,
        src: 'http://www.chapter2.com/audio.mp3',
      });

      //4 check
      const playlistChaptersDelete = bookPlaylistChaptersSchema.read();
      expect(playlistChaptersDelete[0].chapter).toEqual(2);
    });
  });

  it('CRUD: read playlist chapter', async () => {
    realm.write(() => {
      const playlistChapterData = bookPlaylistChaptersSchema.create({
        chapter: 1,
        src: 'http://www.chapter.com/audio.mp3',
      });

      expect(playlistChapterData).toBeTruthy();

      const playlistChapters = bookPlaylistChaptersSchema.read();
      expect(playlistChapters.length > 0).toBeTruthy();
    });
  });
});
