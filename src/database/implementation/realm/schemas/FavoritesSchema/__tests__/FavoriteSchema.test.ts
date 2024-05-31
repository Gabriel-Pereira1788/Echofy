import Realm from 'realm';

import {buildSchemas} from '../..';
import {buildBookSchema} from '../../BookSchema/buildSchema';
import {BookPlaylistChaptersSchema, BookSchema} from '../../BookSchema/schema';
import {buildFavoriteSchema} from '../buildSchema';
import {favoriteMockData} from '../mock/favoriteMockData';
import {FavoriteSchema} from '../schema';

const config = {
  schema: [FavoriteSchema, BookSchema, BookPlaylistChaptersSchema],
  path: 'testing.realm',
};
let realm: Realm;
let favoriteSchema: ReturnType<typeof buildFavoriteSchema>;
let bookSchema: ReturnType<typeof buildBookSchema>;
beforeEach(async () => {
  realm = await Realm.open(config);
  favoriteSchema = buildFavoriteSchema(realm);
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
  it('CRUD: create favorite', async () => {
    realm.write(() => {
      const bookData = bookSchema.create(favoriteMockData.book!);
      const favoriteData = favoriteSchema.create({
        ...favoriteMockData,
        book: bookData!,
      });

      expect(favoriteData).toBeTruthy();
    });
  });

  it('CRUD: delete favorite', async () => {
    expect(true).toBeTruthy();
    realm.write(() => {
      const bookData = bookSchema.create(favoriteMockData.book!);
      const favoriteData = favoriteSchema.create({
        ...favoriteMockData,
        book: bookData!,
      });

      expect(favoriteData).toBeTruthy();

      //2) verify creating correctly
      const favorites = favoriteSchema.read();
      expect(favorites.length > 0).toBeTruthy();
      //3) delete
      favoriteSchema.delete(favoriteData?.id!);

      //4 check remove correctly
      const favoritesDataDelete = favoriteSchema.read();
      expect(favoritesDataDelete.length === 0).toBeTruthy();
    });
  });

  it('CRUD: update  favorite', async () => {
    realm.write(() => {
      //1) create
      const bookData = bookSchema.create(favoriteMockData.book!);
      const favoriteData = favoriteSchema.create({
        ...favoriteMockData,
        book: bookData!,
      });

      expect(favoriteData).toBeTruthy();

      //2) verify creating correctly
      const favorites = favoriteSchema.read();
      expect(favorites.length > 0).toBeTruthy();

      //3)update book
      favoriteSchema.update(favoriteData?.id!, {
        uid: '1222',
      });

      //4 check
      const favoritesUpdatedData = favoriteSchema.read();
      expect(favoritesUpdatedData[0].uid).toEqual('1222');
    });
  });
});
