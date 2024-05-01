import React from 'react';

import {act, bookMock, fireEvent, render, screen} from '@test';

import {BookDetailsSummary} from '..';

function customRender() {
  render(<BookDetailsSummary summary={bookMock.bookDesc} />);

  return {
    readMoreButtonElement: screen.getByTestId('button-toggle-read-mode'),
    readMoreButtonText: screen.getByText(/read more/i),
    summaryTextElement: screen.getByTestId('summary-text'),
  };
}

describe('BookDetailsSummary', () => {
  it('should be render component correctly', () => {
    const {readMoreButtonElement, readMoreButtonText, summaryTextElement} =
      customRender();

    console.log('summaryText', summaryTextElement.props.children[0]);
    expect(summaryTextElement).toBeTruthy();
    expect(readMoreButtonElement).toBeTruthy();
    expect(readMoreButtonText).toBeTruthy();
  });

  it('should be toggle read more text', () => {
    const {readMoreButtonElement, readMoreButtonText, summaryTextElement} =
      customRender();

    const text = summaryTextElement.props.children[0] as string;
    const expectTextResume = bookMock.bookDesc.slice(0, 500) + '...';
    expect(text.length).toEqual(expectTextResume.length);
    expect(readMoreButtonText).toBeTruthy();
    act(() => {
      fireEvent.press(readMoreButtonElement);
    });
    const reRenderSummaryTextElement = screen.getByTestId('summary-text');
    const reRenderText = reRenderSummaryTextElement.props.children[0] as string;
    const reRenderReadMoreButtonText = screen.getByText('read less');
    const expectTextExpand = bookMock.bookDesc;

    expect(reRenderText.length).toEqual(expectTextExpand.length);
    expect(reRenderReadMoreButtonText).toBeTruthy();
  });
});
