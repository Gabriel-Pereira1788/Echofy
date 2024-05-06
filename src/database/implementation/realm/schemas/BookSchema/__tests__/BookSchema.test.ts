import Realm from 'realm';

import {buildSchemas} from '../..';
import {BookPlaylistChapters} from '../../BookPlaylistChapters/schema';
import {buildBookSchema} from '../buildSchema';
import {bookMock} from '../mock/bookMock';
import {BookSchema} from '../schema';

const config = {
  schema: [BookSchema, BookPlaylistChapters],
  path: 'testing.realm',
};
let realm: Realm;
let bookSchema: ReturnType<typeof buildBookSchema>;

beforeEach(async () => {
  realm = await Realm.open(config);
  bookSchema = buildBookSchema(realm);
  buildSchemas(realm);
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
describe('BookSchema', () => {
  it('CRUD: create book', async () => {
    expect(true).toBeTruthy();
    realm.write(() => {
      const bookData = bookSchema.create(bookMock);
      console.log('bookData', bookData);
      expect(bookData).toBeTruthy();
    });
  });

  it('CRUD: delete book', async () => {
    expect(true).toBeTruthy();
    realm.write(() => {
      const bookData = bookSchema.create(bookMock);
      console.log('bookData', bookData);
      expect(bookData).toBeTruthy();

      //2) verify creating correctly
      const books = bookSchema.read();
      expect(books.length > 0).toBeTruthy();
      //3) delete
      bookSchema.delete(bookData!.id);

      //4 check remove correctly
      const playlistChaptersDelete = bookSchema.read();
      expect(playlistChaptersDelete.length === 0).toBeTruthy();
    });
  });

  it('CRUD: update  book', async () => {
    realm.write(() => {
      //1) create
      const bookData = bookSchema.create(bookMock);
      console.log('bookData', bookData);
      expect(bookData).toBeTruthy();

      //2) verify creating correctly
      const books = bookSchema.read();
      expect(books.length > 0).toBeTruthy();

      //3)update book
      bookSchema.update(bookData!.id, {
        ...bookMock,
        book_author: 'John doe 2',
      });

      //4 check
      const playlistChaptersDelete = bookSchema.read();
      expect(playlistChaptersDelete[0].book_author).toEqual('John doe 2');
    });
  });
});
