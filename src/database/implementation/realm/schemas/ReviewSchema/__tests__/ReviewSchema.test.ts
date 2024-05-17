import Realm from 'realm';

import {buildSchemas} from '../..';
import {buildReviewSchema} from '../buildSchema';
// import {bookMock} from '../mock/bookMock';
import {reviewMock} from '../mock/reviewMock';
import {ReviewSchema, AuthorSchema} from '../schema';

const config = {
  schema: [ReviewSchema, AuthorSchema],
  path: 'testing.realm',
};
let realm: Realm;
let reviewSchema: ReturnType<typeof buildReviewSchema>;

beforeEach(async () => {
  realm = await Realm.open(config);
  reviewSchema = buildReviewSchema(realm);
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
  it('CRUD: create review', async () => {
    expect(true).toBeTruthy();
    realm.write(() => {
      const reviewData = reviewSchema.create(reviewMock);
      console.log('reviewData', reviewData);
      expect(reviewData).toBeTruthy();
    });
  });

  it('CRUD: delete review', async () => {
    expect(true).toBeTruthy();
    realm.write(() => {
      const reviewData = reviewSchema.create(reviewMock);
      console.log('reviewData', reviewData);
      expect(reviewData).toBeTruthy();

      //2) verify creating correctly
      const reviews = reviewSchema.read();
      expect(reviews.length > 0).toBeTruthy();
      //3) delete
      reviewSchema.delete(reviewData?.id!);

      //4 check remove correctly
      const reviewsData = reviewSchema.read();
      expect(reviewsData.length === 0).toBeTruthy();
    });
  });

  it('CRUD: update  review', async () => {
    realm.write(() => {
      //1) create
      const reviewData = reviewSchema.create(reviewMock);
      console.log('reviewData', reviewData);
      expect(reviewData).toBeTruthy();

      //2) verify creating correctly
      const books = reviewSchema.read();
      expect(books.length > 0).toBeTruthy();

      //3)update book
      reviewSchema.update(reviewData?.id!, {
        author: {author_name: 'John doe 2', name: 'John doe 2'},
      });

      //4 check
      const reviewsData = reviewSchema.read();
      console.log('reviewData', reviewsData);
      expect(reviewsData[0].author.author_name).toEqual('John doe 2');
    });
  });
});
