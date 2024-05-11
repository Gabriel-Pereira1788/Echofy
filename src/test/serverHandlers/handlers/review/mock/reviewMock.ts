import {PaginatedDocs} from '@infra';
import {Review, ReviewApi} from 'src/domain/Review/review-types';

const docs: ReviewApi[] = [
  {
    id: 'f8fadfd6-9aa5-44f3-a17d-fe2b403aa2a1',
    author: {
      name: 'Jennifer Martinez',
      profile_image:
        'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    book_id: '2d4d8919-4241-4f10-8d1c-59f8f8e42f35',
    vote_rating: 5,
    content:
      'Um verdadeiro tesouro literário! A narrativa é rica em detalhes, os personagens são complexos e a trama é envolvente.',
    createdAt: '2024-04-27T02:56:05.896Z',
    updatedAt: '2024-04-27T02:56:05.896Z',
  },
  {
    id: '20621e37-0d7b-4403-b69e-e730d674294f',
    author: {
      name: 'Sarah Williams',
      profile_image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    book_id: '2d4d8919-4241-4f10-8d1c-59f8f8e42f35',
    vote_rating: 2,
    content:
      'Embora tenha algumas partes interessantes, no geral o livro é enfadonho e a escrita é clichê.',
    createdAt: '2024-04-27T02:56:05.896Z',
    updatedAt: '2024-04-27T02:56:05.896Z',
  },
  {
    id: '53198921-2849-4c3a-b471-13198828193f',
    author: {
      name: 'Emily Brown',
      profile_image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    book_id: '2d4d8919-4241-4f10-8d1c-59f8f8e42f35',
    vote_rating: 2,
    content:
      'Não consegui me envolver com a história. Os personagens são pouco interessantes e o final é bastante previsível.',
    createdAt: '2024-04-27T02:56:05.895Z',
    updatedAt: '2024-04-27T02:56:05.895Z',
  },
];

export const reviewMock: PaginatedDocs<ReviewApi> = {
  docs: docs,
  nextPage: 2,
  page: 1,
  prevPage: null,
  totalDocs: 4,
  totalPages: 1,
};

export const reviewsListMock: Review[] = reviewMock.docs.map(review => {
  return {
    author: review.author,
    content: review.content,
    id: review.id,
    voteRating: review.vote_rating,
  };
});
