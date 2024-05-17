import {IBookExternalData} from '@models';

export const bookMock: IBookExternalData = {
  id: 'c342d355-24ba-472d-a1bb-ee40d9108945',
  book_image: 'https://www.loyalbooks.com/image/detail/47.jpg',
  book_genres: ['Adventure', 'Kids', 'Fantasy', 'Fiction', 'Literature'],
  book_star_raiting: '3',
  book_author: 'John doe',
  book_read_link: 'www.ttt.com',
  book_title: "Alice's Adventures in Wonderland",
  book_desc:
    ' An acclaimed children’s classic depicting the odd, but riveting journeys of the curious Alice as she explores the surreal world of Wonderland. Written by Charles Lutwidge Dodgson or better known under his pseudonym Lewis Caroll, this episodic novel is assembled in twelve chapters each containing a prominent adventure. The departure from logic and its embracement of pure imagination is what makes Alice’s Adventures in Wonderland a model for fantasy novels and a timeless classic. The novel begins when the self-aware young Alice, who grows bored of sitting by the river with her sister, and spots a peculiar looking rabbit, dressed in a waistcoat. She hears the rabbit, which is seemingly in a hurry, mumbling whilst dangling its pocket watch. Impulsively, Alice inquisitively rushes after it making her way down a rabbit-hole which descends to the fantasy realm of Wonderland. Finding herself in an unknown corridor encircled by doors of all shapes and sizes, Alice is subject to her first of many bizarre encounters. In order to fit through a tiny door, which separates her from a beautiful garden, she drinks a shrinking potion. Unfortunately, she forgets the key to the door on the normal sized table and faces the beginning of her troubles. In her pursue of the White Rabbit throughout Wonderland, Alice goes through immense individual changes and revelations as her perception of reality is altered. After a sequence of events, Alice discovers the unsettling features of the strange world as she encounters zany characters including the White Rabbit, the Cheshire Cat, the Mad Hatter, the Hare and the intimidating Queen of Hearts. Caroll’s use of wordplay is another interesting concept in the novel. Not only does he invent new words and expressions, but he also twists the meanings of the already existing. Illustrating the purity of childhood innocence, Alice’s Adventures in Wonderland serves as a playful fairy tale for its youngest readers and a limitless playground for the imaginative minds of older enthusiasts.',
  playlist_chapters: [
    {
      chapter: 0,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_01_carroll_64kb.mp3',
    },
    {
      chapter: 1,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_02_carroll_64kb.mp3',
    },
    {
      chapter: 2,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_03_carroll_64kb.mp3',
    },
  ],
};
