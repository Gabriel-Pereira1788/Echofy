import Realm from 'realm';

import {buildBookCategorySchema} from '../buildSchema';
import {BookCategorySchema} from '../schema';

const config = {
  schema: [BookCategorySchema],
  path: 'testing.realm',
};
let realm: Realm;
let bookCategorySchema: ReturnType<typeof buildBookCategorySchema>;
beforeEach(async () => {
  realm = await Realm.open(config);
  bookCategorySchema = buildBookCategorySchema(realm);
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
describe('BookCategorySchema', () => {
  it('CRUD: create book category', async () => {
    let bookCategoryData;
    realm.write(() => {
      bookCategoryData = bookCategorySchema.create({
        text: 'New Category',
      });
    });

    console.log('bookCategoryData', bookCategoryData);
    expect(bookCategoryData).toBeTruthy();
  });

  it('CRUD: delete book category', async () => {
    let bookCategoryData;
    realm.write(() => {
      //1) create book
      bookCategoryData = bookCategorySchema.create({
        text: 'New Category',
      });
      expect(bookCategoryData).toBeTruthy();

      //2) verify creating correctly
      const bookCategories = bookCategorySchema.read();
      expect(bookCategories.length > 0).toBeTruthy();

      //3) delete book

      bookCategorySchema.delete(bookCategoryData!._id ?? '');

      //4 check remove correctly
      const bookCategoriesDelete = bookCategorySchema.read();
      expect(bookCategoriesDelete.length === 0).toBeTruthy();
    });
  });

  it('CRUD: update book category', async () => {
    let bookCategoryData;
    realm.write(() => {
      //1) create book
      bookCategoryData = bookCategorySchema.create({
        text: 'New Category',
      });
      expect(bookCategoryData).toBeTruthy();

      //2) verify creating correctly
      const bookCategories = bookCategorySchema.read();
      expect(bookCategories.length > 0).toBeTruthy();

      //3)update book
      bookCategorySchema.update(bookCategoryData?._id ?? '', {
        text: 'Category Edited',
      });

      //4 check remove correctly
      const bookCategoriesDelete = bookCategorySchema.read();
      expect(bookCategoriesDelete[0].text).toEqual('Category Edited');
    });
  });

  it('CRUD: read book category', async () => {
    let bookCategoryData;
    realm.write(() => {
      //1) create book
      bookCategoryData = bookCategorySchema.create({
        text: 'New Category',
      });
      expect(bookCategoryData).toBeTruthy();

      //2) verify creating correctly
      const bookCategories = bookCategorySchema.read();
      expect(bookCategories.length > 0).toBeTruthy();
    });
  });
});
