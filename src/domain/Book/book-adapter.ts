import {BookCategory} from './book-types';

function toBookCategory(categories: string[]): BookCategory[] {
  return categories.map(category => ({
    isSelected: false,
    text: category,
  }));
}

export const bookAdapter = {
  toBookCategory,
};
