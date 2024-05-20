import {BookSection} from '@domain';

export function buildBookSections(): BookSection[] {
  return [
    {
      identify: 'recommended-for-you',
      title: 'Recommended For You',
    },
    {
      identify: 'best-seller',
      title: 'Best Seller',
    },
    {
      identify: 'fiction',
      title: 'Fiction',
    },
    {
      identify: 'fantasy',
      title: 'Fantasy',
    },
    {
      identify: 'adventure',
      title: 'Adventure',
    },
    {
      identify: 'fairy tales',
      title: 'Fairy Tales',
    },
    {
      identify: 'philosophy',
      title: 'Philosophy',
    },
    {
      identify: 'mystery',
      title: 'Mystery',
    },
  ];
}
