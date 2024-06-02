import {Book, bookAdapter} from '@domain';
import {PaginatedDocs} from '@infra';
import {IBookExternalData} from '@models';

export const bookMock: Book = {
  id: 'c342d355-24ba-472d-a1bb-ee40d9108945',
  bookAuthor: 'John doe',
  bookReadLink: 'www.ttt.com',
  bookDesc:
    ' An acclaimed children’s classic depicting the odd, but riveting journeys of the curious Alice as she explores the surreal world of Wonderland. Written by Charles Lutwidge Dodgson or better known under his pseudonym Lewis Caroll, this episodic novel is assembled in twelve chapters each containing a prominent adventure. The departure from logic and its embracement of pure imagination is what makes Alice’s Adventures in Wonderland a model for fantasy novels and a timeless classic. The novel begins when the self-aware young Alice, who grows bored of sitting by the river with her sister, and spots a peculiar looking rabbit, dressed in a waistcoat. She hears the rabbit, which is seemingly in a hurry, mumbling whilst dangling its pocket watch. Impulsively, Alice inquisitively rushes after it making her way down a rabbit-hole which descends to the fantasy realm of Wonderland. Finding herself in an unknown corridor encircled by doors of all shapes and sizes, Alice is subject to her first of many bizarre encounters. In order to fit through a tiny door, which separates her from a beautiful garden, she drinks a shrinking potion. Unfortunately, she forgets the key to the door on the normal sized table and faces the beginning of her troubles. In her pursue of the White Rabbit throughout Wonderland, Alice goes through immense individual changes and revelations as her perception of reality is altered. After a sequence of events, Alice discovers the unsettling features of the strange world as she encounters zany characters including the White Rabbit, the Cheshire Cat, the Mad Hatter, the Hare and the intimidating Queen of Hearts. Caroll’s use of wordplay is another interesting concept in the novel. Not only does he invent new words and expressions, but he also twists the meanings of the already existing. Illustrating the purity of childhood innocence, Alice’s Adventures in Wonderland serves as a playful fairy tale for its youngest readers and a limitless playground for the imaginative minds of older enthusiasts.',
  bookGenres: ['Adventure', 'Kids', 'Fantasy', 'Fiction', 'Literature'],
  bookImage: 'https://www.loyalbooks.com/image/detail/47.jpg',
  voteRating: 4,
  bookTitle: "Alice's Adventures in Wonderland",
  playlistChapters: [
    {
      chapter: 0,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_00_carroll_64kb.mp3',
    },
    {
      chapter: 1,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_01_carroll_64kb.mp3',
    },
    {
      chapter: 2,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_02_carroll_64kb.mp3',
    },
    {
      chapter: 3,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_03_carroll_64kb.mp3',
    },
    {
      chapter: 4,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_04_carroll_64kb.mp3',
    },
    {
      chapter: 5,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_05_carroll_64kb.mp3',
    },
    {
      chapter: 6,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_06_carroll_64kb.mp3',
    },
    {
      chapter: 7,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_07_carroll_64kb.mp3',
    },
    {
      chapter: 8,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_08_carroll_64kb.mp3',
    },
    {
      chapter: 9,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_09_carroll_64kb.mp3',
    },
    {
      chapter: 10,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_10_carroll_64kb.mp3',
    },
    {
      chapter: 11,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_11_carroll_64kb.mp3',
    },
    {
      chapter: 12,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_12_carroll_64kb.mp3',
    },
  ],
};

export const bookMockDataApi: IBookExternalData = {
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
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_00_carroll_64kb.mp3',
    },
    {
      chapter: 1,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_01_carroll_64kb.mp3',
    },
    {
      chapter: 2,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_02_carroll_64kb.mp3',
    },
    {
      chapter: 3,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_03_carroll_64kb.mp3',
    },
    {
      chapter: 4,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_04_carroll_64kb.mp3',
    },
    {
      chapter: 5,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_05_carroll_64kb.mp3',
    },
    {
      chapter: 6,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_06_carroll_64kb.mp3',
    },
    {
      chapter: 7,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_07_carroll_64kb.mp3',
    },
    {
      chapter: 8,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_08_carroll_64kb.mp3',
    },
    {
      chapter: 9,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_09_carroll_64kb.mp3',
    },
    {
      chapter: 10,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_10_carroll_64kb.mp3',
    },
    {
      chapter: 11,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_11_carroll_64kb.mp3',
    },
    {
      chapter: 12,
      src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_12_carroll_64kb.mp3',
    },
  ],
};
export const bookMockApi: PaginatedDocs<IBookExternalData> = {
  docs: [
    {
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
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_00_carroll_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_01_carroll_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_02_carroll_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_03_carroll_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_04_carroll_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_05_carroll_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_06_carroll_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_07_carroll_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_08_carroll_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_09_carroll_64kb.mp3',
        },
        {
          chapter: 10,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_10_carroll_64kb.mp3',
        },
        {
          chapter: 11,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_11_carroll_64kb.mp3',
        },
        {
          chapter: 12,
          src: 'http://www.archive.org/download/aliceinwonderland_1102_librivox/aliceinwonderland_12_carroll_64kb.mp3',
        },
      ],
    },
    {
      id: 'ca4b79cd-500f-4d41-8190-b170e568f908',
      book_image: 'https://www.loyalbooks.com/image/detail/49.jpg',
      book_author: 'John doe',
      book_read_link: 'www.read.com',
      book_star_raiting: '5',
      book_genres: [
        'Adventure',
        'Kids',
        'Dramatic Works',
        'Fiction',
        'Humor',
        'Literature',
      ],
      book_title: 'The Adventures of Tom Sawyer',
      book_desc:
        " If ever there was a story written based unabashedly on adventure and trouble, this is it. There are treasure hunts and murderers on the run in this book that will keep you spellbound. Tom and his half-brother, Sid, lived with their aunt, Polly. Tom was a boisterous young fellow who constantly found himself in rather awkward situations that landed him into trouble. These situations were however exceedingly hilarious. On one occasion, Tom dirtied his clothes in a fight and his punishment was to whitewash the fence the following day. He cunningly got his friends to not only beg to do the work for him but also to pay him for the privilege! Tom and his friend, Huckleberry Finn visited the graveyard one night and witnessed the murder of Dr. Robinson. In fear they ran away to an island but soon came back home when they learned that their parents thought they were dead. But what became of the murderer on the run? Tom Sawyer is a story told in such an engaging manner that you'll want to read it all in one sitting. The characters are vibrant and alive and the language simple, fun and engaging. If you have the stomach for such a story full of humor and horror, this book will not disappoint.",
      playlist_chapters: [
        {
          chapter: 0,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_01-02_twain_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_03-04_twain_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_05-06_twain_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_07-08_twain_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_09-10_twain_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_11-12_twain_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_13-14-15_twain_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_16-17_twain_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_18-19-20_twain_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_21-22-23_twain_64kb.mp3',
        },
        {
          chapter: 10,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_24-25_twain_64kb.mp3',
        },
        {
          chapter: 11,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_26_twain_64kb.mp3',
        },
        {
          chapter: 12,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_27-28_twain_64kb.mp3',
        },
        {
          chapter: 13,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_29_twain_64kb.mp3',
        },
        {
          chapter: 14,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_30_twain_64kb.mp3',
        },
        {
          chapter: 15,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_31-32_twain_64kb.mp3',
        },
        {
          chapter: 16,
          src: 'http://www.archive.org/download/tom_sawyer_librivox/TSawyer_33-34-35_twain_64kb.mp3',
        },
      ],
    },
    {
      id: '17581ffa-2bca-4921-8f94-29f972a0d24a',
      book_author: 'John doe',
      book_read_link: 'www.read.com',
      book_star_raiting: '5',
      book_image:
        'https://www.loyalbooks.com/image/detail/Swiss-Family-Robinson-.jpg',
      book_genres: [
        'Adventure',
        'Kids',
        'Fiction',
        'Literature',
        'Nature',
        'Teen/Young adult',
      ],
      book_title: 'The Swiss Family Robinson',
      book_desc:
        ' A beautiful story about survival, the Robinson family shows that one does not have to have the usual comforts of life in order to be comfortable and happy. It is also a story about family relations. The book showcases a family of six that has to start all over without the basic amenities that make life easier in the eyes of society. The idea of being in an island with no human neighbors is daunting to say the least. The family was shipwrecked and everyone else on the ship perished when they deserted the ship. When the storm finally abated, they figured out a way to shore and immediately tackled the most urgent needs like food and shelter for the night. The senior Robinson and Franz, the eldest son, explored the island and found that it was well endowed with food and animals that could be killed for meat. On further exploration, they discovered better shelter and even a salt supply. They had supplies and even wax from which they made candles. They made many more amazing discoveries and got quite comfortable on the island which was hither to uninhabited. Later, they found an English girl, Jenny, who had been stranded on a different island for three years. But how did she get there and survive so long? This book tells an endearing survival story and highlights the joys of close family bonds.',
      playlist_chapters: [
        {
          chapter: 0,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_01_wyss_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_02_wyss_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_03_wyss_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_04_wyss_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_05_wyss_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_06_wyss_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_07_wyss_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_08_wyss_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_09_wyss_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_10_wyss_64kb.mp3',
        },
        {
          chapter: 10,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_11-12_wyss_64kb.mp3',
        },
        {
          chapter: 11,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_13-14_wyss_64kb.mp3',
        },
        {
          chapter: 12,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_15-16_wyss_64kb.mp3',
        },
        {
          chapter: 13,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_17-18_wyss_64kb.mp3',
        },
        {
          chapter: 14,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_19_wyss_64kb.mp3',
        },
        {
          chapter: 15,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_20_wyss_64kb.mp3',
        },
        {
          chapter: 16,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_21_wyss_64kb.mp3',
        },
        {
          chapter: 17,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_22_wyss_64kb.mp3',
        },
        {
          chapter: 18,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_23_wyss_64kb.mp3',
        },
        {
          chapter: 19,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_24_wyss_64kb.mp3',
        },
        {
          chapter: 20,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_25_wyss_64kb.mp3',
        },
        {
          chapter: 21,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_26_wyss_64kb.mp3',
        },
        {
          chapter: 22,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_27_wyss_64kb.mp3',
        },
        {
          chapter: 23,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_28_wyss_64kb.mp3',
        },
        {
          chapter: 24,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_29_wyss_64kb.mp3',
        },
        {
          chapter: 25,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_30-31_wyss_64kb.mp3',
        },
        {
          chapter: 26,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_32_wyss_64kb.mp3',
        },
        {
          chapter: 27,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_33_wyss_64kb.mp3',
        },
        {
          chapter: 28,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_34_wyss_64kb.mp3',
        },
        {
          chapter: 29,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_35_wyss_64kb.mp3',
        },
        {
          chapter: 30,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_36_wyss_64kb.mp3',
        },
        {
          chapter: 31,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_37_wyss_64kb.mp3',
        },
        {
          chapter: 32,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_38_wyss_64kb.mp3',
        },
        {
          chapter: 33,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_39_wyss_64kb.mp3',
        },
        {
          chapter: 34,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_40_wyss_64kb.mp3',
        },
        {
          chapter: 35,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_41_wyss_64kb.mp3',
        },
        {
          chapter: 36,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_42_wyss_64kb.mp3',
        },
        {
          chapter: 37,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_43_wyss_64kb.mp3',
        },
        {
          chapter: 38,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_44_wyss_64kb.mp3',
        },
        {
          chapter: 39,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_45-46_wyss_64kb.mp3',
        },
        {
          chapter: 40,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_47_wyss_64kb.mp3',
        },
        {
          chapter: 41,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_48_wyss_64kb.mp3',
        },
        {
          chapter: 42,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_49_wyss_64kb.mp3',
        },
        {
          chapter: 43,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_50_wyss_64kb.mp3',
        },
        {
          chapter: 44,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_51_wyss_64kb.mp3',
        },
        {
          chapter: 45,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_52_wyss_64kb.mp3',
        },
        {
          chapter: 46,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_53_wyss_64kb.mp3',
        },
        {
          chapter: 47,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_54_wyss_64kb.mp3',
        },
        {
          chapter: 48,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_55_wyss_64kb.mp3',
        },
        {
          chapter: 49,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_56_wyss_64kb.mp3',
        },
        {
          chapter: 50,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_57_wyss_64kb.mp3',
        },
        {
          chapter: 51,
          src: 'http://www.archive.org/download/swiss_family_robinson_librivox/swiss_family_robinson_58conclusion_wyss_64kb.mp3',
        },
      ],
    },
  ],
  nextPage: 2,
  page: 1,
  prevPage: null,
  totalDocs: 22,
  totalPages: 3,
};

export const sectionBooksMock = [
  {
    identify: 'recommended-for-you',
    title: 'Recommended For You',
    books: bookMockApi.docs.map(doc => bookAdapter.toBookData(doc)),
  },
  {
    identify: 'best-seller',
    title: 'Best Seller',
    books: bookMockApi.docs.map(doc => bookAdapter.toBookData(doc)),
  },
  {
    identify: 'fiction',
    title: 'Fiction',
    books: bookMockApi.docs.map(doc => bookAdapter.toBookData(doc)),
  },
  {
    identify: 'fantasy',
    title: 'Fantasy',
    books: bookMockApi.docs.map(doc => bookAdapter.toBookData(doc)),
  },
  {
    identify: 'adventure',
    title: 'Adventure',
    books: bookMockApi.docs.map(doc => bookAdapter.toBookData(doc)),
  },
  {
    identify: 'fairy tales',
    title: 'Fairy Tales',
    books: bookMockApi.docs.map(doc => bookAdapter.toBookData(doc)),
  },
  {
    identify: 'philosophy',
    title: 'Philosophy',
    books: bookMockApi.docs.map(doc => bookAdapter.toBookData(doc)),
  },
  {
    identify: 'mystery',
    title: 'Mystery',
    books: bookMockApi.docs.map(doc => bookAdapter.toBookData(doc)),
  },
];
