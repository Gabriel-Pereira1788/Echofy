import React from 'react';

import {createCommonStackNavigator} from '@router';
import {bookMockApi, renderScreen, screen, server} from '@test';

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterAll(() => {
  server.close();
});

const TestCommonStack = createCommonStackNavigator(
  () => <></>,
  'DetailsBookScreen',
);
describe('DetailsBookScreen', () => {
  it('should be render screen correctly', async () => {
    renderScreen(<TestCommonStack />);

    screen.debug();
    const bookData = bookMockApi.docs[0];
    const imageCover = await screen.findByTestId('book-image-cover');
    expect(imageCover).toBeTruthy();

    const bookTitle = screen.getByText(bookData.book_title);
    expect(bookTitle).toBeTruthy();

    const bookAuthor = screen.getByText(bookData.book_author);
    expect(bookAuthor).toBeTruthy();

    const bookCategories = screen.getAllByTestId('category-book-item');
    expect(bookCategories.length).toEqual(3);

    const summaryTextElement = screen.getByTestId('summary-text');
    expect(summaryTextElement).toBeTruthy();

    const text = summaryTextElement.props.children[0] as string;
    const expectTextResume = bookData.book_desc.slice(0, 500) + '...';
    expect(text.length).toEqual(expectTextResume.length);
  });
});
