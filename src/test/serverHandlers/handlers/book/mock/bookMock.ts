import {Book, BookApi} from '@domain';

export const bookMock: Book = {
  id: 'c342d355-24ba-472d-a1bb-ee40d9108945',
  bookDesc:
    ' An acclaimed children’s classic depicting the odd, but riveting journeys of the curious Alice as she explores the surreal world of Wonderland. Written by Charles Lutwidge Dodgson or better known under his pseudonym Lewis Caroll, this episodic novel is assembled in twelve chapters each containing a prominent adventure. The departure from logic and its embracement of pure imagination is what makes Alice’s Adventures in Wonderland a model for fantasy novels and a timeless classic. The novel begins when the self-aware young Alice, who grows bored of sitting by the river with her sister, and spots a peculiar looking rabbit, dressed in a waistcoat. She hears the rabbit, which is seemingly in a hurry, mumbling whilst dangling its pocket watch. Impulsively, Alice inquisitively rushes after it making her way down a rabbit-hole which descends to the fantasy realm of Wonderland. Finding herself in an unknown corridor encircled by doors of all shapes and sizes, Alice is subject to her first of many bizarre encounters. In order to fit through a tiny door, which separates her from a beautiful garden, she drinks a shrinking potion. Unfortunately, she forgets the key to the door on the normal sized table and faces the beginning of her troubles. In her pursue of the White Rabbit throughout Wonderland, Alice goes through immense individual changes and revelations as her perception of reality is altered. After a sequence of events, Alice discovers the unsettling features of the strange world as she encounters zany characters including the White Rabbit, the Cheshire Cat, the Mad Hatter, the Hare and the intimidating Queen of Hearts. Caroll’s use of wordplay is another interesting concept in the novel. Not only does he invent new words and expressions, but he also twists the meanings of the already existing. Illustrating the purity of childhood innocence, Alice’s Adventures in Wonderland serves as a playful fairy tale for its youngest readers and a limitless playground for the imaginative minds of older enthusiasts.',
  bookGenres: ['Adventure', 'Kids', 'Fantasy', 'Fiction', 'Literature'],
  bookImage: 'https://www.loyalbooks.com/image/detail/47.jpg',
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

export const bookMockApi: {docs: BookApi[]} = {
  docs: [
    {
      _id: '65aa9fb68f0378eb01060038',
      id: 'c342d355-24ba-472d-a1bb-ee40d9108945',
      book_image: 'https://www.loyalbooks.com/image/detail/47.jpg',
      book_genres: ['Adventure', 'Kids', 'Fantasy', 'Fiction', 'Literature'],
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
      createdAt: '2024-01-19T16:13:43.132Z',
      updatedAt: '2024-01-19T16:13:43.132Z',
      __v: 0,
    },
    {
      _id: '65aa9fb68f0378eb01060039',
      id: 'ca4b79cd-500f-4d41-8190-b170e568f908',
      book_image: 'https://www.loyalbooks.com/image/detail/49.jpg',
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
      createdAt: '2024-01-19T16:13:43.132Z',
      updatedAt: '2024-01-19T16:13:43.132Z',
      __v: 0,
    },
    {
      _id: '65aa9fb68f0378eb0106003a',
      id: '17581ffa-2bca-4921-8f94-29f972a0d24a',
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
      createdAt: '2024-01-19T16:13:43.132Z',
      updatedAt: '2024-01-19T16:13:43.132Z',
      __v: 0,
    },
    {
      _id: '65aa9fb68f0378eb01060036',
      id: '4f519ea8-8680-4b89-9cac-982d6af6a2bd',
      book_image:
        'https://www.loyalbooks.com/image/detail/Moby-Dick-or-the-Whale.jpg',
      book_genres: ['Adventure', 'Fiction', 'Literature', 'Sea stories'],
      book_title: 'Moby Dick',
      book_desc:
        "  “Call me Ishmael” is one of the most famous opening lines in American literature. With these words, opens one of the strangest and most gripping stories ever written about the sea and sea-faring. Moby Dick by Herman Melville is today considered one of the greatest novels written in America but paradoxically, it was a miserable failure when it first made its debut in 1851. Entitled Moby Dick or The Whale the book finally got its due after the author's death and is now regarded as a classic portrayal of mania and fatal obsession. The narrator, Ishmael, travels to New Bedford, Massachusetts, to find a place on a whaling ship. He lodges at a seedy inn where he is forced to share a room with a strange old character, Queequeg, who was a harpooner. Despite his initial revulsion of Queequeg, Ishmael decides to join him in looking for work together. They reach Nantucket, the traditional center of whaling, where they find a berth on the Pequod, a bizarre vessel adorned with the skeletons and teeth of whales. The captain, Ahab, a mysterious figure, does not appear immediately. Later, they come to know that he is on board, recovering from losing a leg on his last voyage having escaped death narrowly following an encounter with a massive sperm whale. As the ship sails past Africa, Ahab's sinister motives begin to emerge. His agenda is to hunt and destroy a legendary whale named Moby Dick, whom he has unsuccessfully pursued several times. He has smuggled his own private harpooners on board and he accosts every whaling ship he meets and demands information about sightings of Moby Dick. One of the ships has a maniacal passenger called Gabriel, who claims to be a prophet and he predicts doom for anyone who seeks Moby Dick. The peg leg captain finally encounters Moby Dick and a trail of destruction follows. The obsessed Ahab refuses to give up. The novel then races towards a brilliant and dramatic climax. As an example of the Great American Novel, Moby Dick is unrivaled in its structure, language and style. Melville amalgamates a fabulous mix of Biblical, Shakespearean and mythical elements along with wonderful seafaring atmosphere sourced from his own nautical experiences on board whaling schooners. Whaling stories from contemporary sources in Nantucket's local grapevine was another rich fountainhead of material. Moby Dick has been adapted for stage, radio, screen, television, comics and graphic novels. It remains a strange and unforgettable classic which no reader should miss.",
      playlist_chapters: [
        {
          chapter: 0,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_000_melville_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_001_002_melville_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_003_melville_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_004_007_melville_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_008_009_melville_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_010_012_melville_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_013_015_melville_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_016_melville_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_017_021_melville_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_022_025_melville_64kb.mp3',
        },
        {
          chapter: 10,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_026_027_melville_64kb.mp3',
        },
        {
          chapter: 11,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_028_031_melville_64kb.mp3',
        },
        {
          chapter: 12,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_032_melville_64kb.mp3',
        },
        {
          chapter: 13,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_033_035_melville_64kb.mp3',
        },
        {
          chapter: 14,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_036_040_melville_64kb.mp3',
        },
        {
          chapter: 15,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_041_melville_64kb.mp3',
        },
        {
          chapter: 16,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_042_044_melville_64kb.mp3',
        },
        {
          chapter: 17,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_045_047_melville_64kb.mp3',
        },
        {
          chapter: 18,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_048_050_melville_64kb.mp3',
        },
        {
          chapter: 19,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_051_053_melville_64kb.mp3',
        },
        {
          chapter: 20,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_054_melville_64kb.mp3',
        },
        {
          chapter: 21,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_055_058_melville_64kb.mp3',
        },
        {
          chapter: 22,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_059_063_melville_64kb.mp3',
        },
        {
          chapter: 23,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_064_067_melville_64kb.mp3',
        },
        {
          chapter: 24,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_068_071_melville_64kb.mp3',
        },
        {
          chapter: 25,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_072_073_melville_64kb.mp3',
        },
        {
          chapter: 26,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_074_077_melville_64kb.mp3',
        },
        {
          chapter: 27,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_078_080_melville_64kb.mp3',
        },
        {
          chapter: 28,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_081_082_melville_64kb.mp3',
        },
        {
          chapter: 29,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_083_086_melville_64kb.mp3',
        },
        {
          chapter: 30,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_087_088_melville_64kb.mp3',
        },
        {
          chapter: 31,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_089_091_melville_64kb.mp3',
        },
        {
          chapter: 32,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_092_096_melville_64kb.mp3',
        },
        {
          chapter: 33,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_097_100_melville_64kb.mp3',
        },
        {
          chapter: 34,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_101_104_melville_64kb.mp3',
        },
        {
          chapter: 35,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_105_108_melville_64kb.mp3',
        },
        {
          chapter: 36,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_109_113_melville_64kb.mp3',
        },
        {
          chapter: 37,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_114_118_melville_64kb.mp3',
        },
        {
          chapter: 38,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_119_123_melville_64kb.mp3',
        },
        {
          chapter: 39,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_124_127_melville_64kb.mp3',
        },
        {
          chapter: 40,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_128_132_melville_64kb.mp3',
        },
        {
          chapter: 41,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_133_melville_64kb.mp3',
        },
        {
          chapter: 42,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_134_melville_64kb.mp3',
        },
        {
          chapter: 43,
          src: 'http://www.archive.org/download/moby_dick_librivox/mobydick_135_melville_64kb.mp3',
        },
      ],
      createdAt: '2024-01-19T16:13:43.132Z',
      updatedAt: '2024-01-19T16:13:43.132Z',
      __v: 0,
    },
    {
      _id: '65aa9fb68f0378eb01060043',
      id: 'cc06a5a9-91cc-4238-8a1e-9957027205dd',
      book_image:
        'https://www.loyalbooks.com/image/detail/Return-of-Sherlock-Holmes.jpg',
      book_genres: [
        'Adventure',
        'Fiction',
        'Literature',
        'Mystery',
        'Short stories',
      ],
      book_title: 'The Return of Sherlock Holmes',
      book_desc:
        "  A young gambler is found shot dead in a closed room. Dr. Watson, who still mourns the disappearance of his famous friend is intrigued enough to step out of his house and take a look at the crime scene. A crowd has gathered there, curiously gazing up at the room where the crime is supposed to have taken place. Watson inadvertently jostles against an elderly, deformed man and knocks a stack of books from the fellow's hand. The man curses Watson vilely and disappears into the throng. It suddenly occurs to Watson that one of the books that he had helped the stranger pick up had seemed familiar... Thus begins the first thrilling story, The Adventure of the Empty House, in The Return of Sherlock Holmes by Sir Arthur Conan Doyle, which was published after what Holmes enthusiasts call the Great Hiatus. The Return of Sherlock Holmes was published in 1905. In 1891, Sir Arthur Conan Doyle was completely exasperated by the seemingly endless appetite of readers who welcomed each new Sherlock Holmes story with the greatest delight. He wrote to his mother confessing that he was “thinking of slaying Holmes... He takes my mind from better things.” His mother's famous reply, “You won't, you can't, you mustn't!” only echoed the voice of his readers. However, in 1893, Conan Doyle did the unthinkable; he finished off Holmes in the Reichenbach Falls in The Final Problem and thought he had done with the man for good. He hadn't reckoned with his readers. There was a flood of protest. Letters to the editors of newspapers, a stream of mail to his publishers and himself, all demanding that Holmes be kept alive. Finally, he gave in and The Return of Sherlock Holmes was greeted with huge delight. Though The Hound of the Baskervilles came out in 1902, it was set in a time before Holmes' “death.” The Return of Sherlock Holmes is a collection of 13 stories. Among them are The Adventure of the Norwood Builder, a tale of a reclusive old bachelor who suddenly vanishes, The Adventure of the Dancing Men, a delightful puzzle involving a mysterious message that contains a series of stick figures, The Adventure of the Solitary Cyclist in which a lovely young governess is being stalked by a man on a bicycle, and many others. The last story, The Adventure of the Second Stain has Watson revealing that Holmes is now completely retired and would not like Watson to write any more stories about him! The Return of Sherlock Holmes is indeed a delightful continuation of the Holmes saga and a great addition to your repertoire!",
      playlist_chapters: [
        {
          chapter: 0,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_01_doyle_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_02_doyle_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_03_doyle_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_04_doyle_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_05_doyle_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_06_doyle_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_07_doyle_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_08_doyle_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_09_doyle_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_10_doyle_64kb.mp3',
        },
        {
          chapter: 10,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_11_doyle_64kb.mp3',
        },
        {
          chapter: 11,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_12_doyle_64kb.mp3',
        },
        {
          chapter: 12,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_13_doyle_64kb.mp3',
        },
        {
          chapter: 13,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_14_doyle_64kb.mp3',
        },
        {
          chapter: 14,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_15_doyle_64kb.mp3',
        },
        {
          chapter: 15,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_16_doyle_64kb.mp3',
        },
        {
          chapter: 16,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_17_doyle_64kb.mp3',
        },
        {
          chapter: 17,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_18_doyle_64kb.mp3',
        },
        {
          chapter: 18,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_19_doyle_64kb.mp3',
        },
        {
          chapter: 19,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_20_doyle_64kb.mp3',
        },
        {
          chapter: 20,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_21_doyle_64kb.mp3',
        },
        {
          chapter: 21,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_22_doyle_64kb.mp3',
        },
        {
          chapter: 22,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_23_doyle_64kb.mp3',
        },
        {
          chapter: 23,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_24_doyle_64kb.mp3',
        },
        {
          chapter: 24,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_25_doyle_64kb.mp3',
        },
        {
          chapter: 25,
          src: 'http://www.archive.org/download/return_holmes_0708_librivox/returnofholmes_26_doyle_64kb.mp3',
        },
      ],
      createdAt: '2024-01-19T16:13:43.133Z',
      updatedAt: '2024-01-19T16:13:43.133Z',
      __v: 0,
    },
    {
      _id: '65aa9fb68f0378eb01060049',
      id: 'e7bb3b21-bc3c-46e5-a028-c8ea80afc306',
      book_image:
        'https://www.loyalbooks.com/image/detail/Short-Science-Fiction-Collection.jpg',
      book_genres: [
        'Adventure',
        'Fiction',
        'Science fiction',
        'Short stories',
        'Teen/Young adult',
      ],
      book_title: 'Short Science Fiction Collection',
      book_desc:
        '  Science fiction (abbreviated SF or sci-fi with varying punctuation and case) is a broad genre of fiction that often involves sociological and technical speculations based on current or future science or technology. This is a reader-selected collection of short stories originally published between 1931 and 1963, that entered the US public domain when their copyright was not renewed. Summary by Cori Samuel, with Wikipedia input.',
      playlist_chapters: [
        {
          chapter: 0,
          src: 'http://www.archive.org/download/short_scifi_001_0711/4ddoodler_waldeyer_edm_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/short_scifi_001_0711/bread_overhead_leiber_ms_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/short_scifi_001_0711/imageofthegods_nourse_jk_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/short_scifi_001_0711/martianvfw_vandenburg_cy_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/short_scifi_001_0711/oneshot_blish_r_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/short_scifi_001_0711/outaroundrigel_wilson_ae_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/short_scifi_001_0711/pygmalionsspectacles_weinbaum_cml_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/short_scifi_001_0711/repairman_harrison_ae_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/short_scifi_001_0711/toyshop_harrison_cs_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/short_scifi_001_0711/warning_from_the_stars_cocking_rd_64kb.mp3',
        },
      ],
      createdAt: '2024-01-19T16:13:43.133Z',
      updatedAt: '2024-01-19T16:13:43.133Z',
      __v: 0,
    },
    {
      _id: '65aa9fb68f0378eb0106004b',
      id: '13e7f3ff-04f0-429b-b270-ad40f029d590',
      book_image: 'https://www.loyalbooks.com/image/detail/Odyssey.jpg',
      book_genres: [
        'Adventure',
        'Classics (antiquity)',
        'Fiction',
        'Languages',
        'Myths/Legends',
        'Poetry',
        'Sea stories',
      ],
      book_title: 'The Odyssey',
      book_desc:
        " A wandering king who's a war-hero doomed to roam the earth by a vengeful God, a plethora of fantastic experiences, a wife battling the invasion of suitors who wish to replace her missing husband, a son in search of his father - the Odyssey is a rich tapestry of incredible experiences and unforgettable characters. A must-read classic for anyone who wants to understand the fundamentals of Western mythology, it is a sequel to the Illiad which recounts the magnificent saga of the Trojan War. The Odyssey continues on, describing the trials and tribulations of the Greeks under the leadership of Odysseus. Reputed to have been composed nearly three thousand years ago, its authorship is still being debated by scholars, though much of it is attributed to the blind poet Homer about whom very little is known. Yet the Illiad and The Odyssey remain the definitive foundations of all Western literature. The Odyssey is a magnificent epic tale that portrays the journey called life. In fact the word “odyssey” in English itself has come to mean a long and eventful journey. In the preceding book The Illiad, Odysseus called Ulysses in Roman mythology, the king of Ithaca, gets embroiled in the Trojan War through the trickery of the Greeks. But once inside, his wonderful qualities of intellect, strategy and leadership come to the foreground as he leads his soldiers to victory. The story of the Odyssey begins when the war of The Illiad ends. Odysseus and his men embark to return to Ithaca but his sworn enemy, the sea god Poseidon, stymies him at every turn, sending storms and foul weather, forcing the wanderers to take shelter in strange and sinister lands. The Odyssey is, besides, the story of Odysseus' beautiful wife Penelope, whose life becomes a struggle, fighting off the innumerable hopefuls who wish to take over her kingdom and her fortune in the absence of her husband. It is also the poignant growing-up tale of Telemachus, a faithful and steadfast son, who refuses to believe that his father won't return. There are many notable translations from the original Greek and it has also been extensively portrayed in art, literature, television and television in languages around the world. Full of human tragedy, bizarre and fantastic creatures, gods and magical beasts, the Odyssey is a treasure-chest of marvelous events. For modern-day readers, young and old alike, it provides exciting, interesting and relevant ideas of war, politics, exile and identity.",
      playlist_chapters: [
        {
          chapter: 0,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_01_homer_butler_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_02_homer_butler_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_03_homer_butler_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_04_homer_butler_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_05_homer_butler_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_06_homer_butler_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_07_homer_butler_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_08_homer_butler_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_09_homer_butler_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_10_homer_butler_64kb.mp3',
        },
        {
          chapter: 10,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_11_homer_butler_64kb.mp3',
        },
        {
          chapter: 11,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_12_homer_butler_64kb.mp3',
        },
        {
          chapter: 12,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_13_homer_butler_64kb.mp3',
        },
        {
          chapter: 13,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_14_homer_butler_64kb.mp3',
        },
        {
          chapter: 14,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_15_homer_butler_64kb.mp3',
        },
        {
          chapter: 15,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_16_homer_butler_64kb.mp3',
        },
        {
          chapter: 16,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_17_homer_butler_64kb.mp3',
        },
        {
          chapter: 17,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_18_homer_butler_64kb.mp3',
        },
        {
          chapter: 18,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_19_homer_butler_64kb.mp3',
        },
        {
          chapter: 19,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_20_homer_butler_64kb.mp3',
        },
        {
          chapter: 20,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_21_homer_butler_64kb.mp3',
        },
        {
          chapter: 21,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_22_homer_butler_64kb.mp3',
        },
        {
          chapter: 22,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_23_homer_butler_64kb.mp3',
        },
        {
          chapter: 23,
          src: 'http://www.archive.org/download/odyssey_butler_librivox/odyssey_24_homer_butler_64kb.mp3',
        },
      ],
      createdAt: '2024-01-19T16:13:43.133Z',
      updatedAt: '2024-01-19T16:13:43.133Z',
      __v: 0,
    },
    {
      _id: '65aa9fb68f0378eb01060050',
      id: 'd147ee17-4f20-462e-81ec-ab677b66d6a3',
      book_image:
        'https://www.loyalbooks.com/image/detail/Gulliver-s-Travels.jpg',
      book_genres: [
        'Adventure',
        'Fantasy',
        'Fiction',
        'Literature',
        'Satire',
        'Travel',
      ],
      book_title: "Gulliver's Travels",
      book_desc:
        ' Comprised of four parts, Gulliver’s Travels documents the bizarre, yet fascinating voyages of Lemuel Gulliver as he makes his way through several uncharted destinations, experiencing the lives of the small, the giant, the scientific, and downright eccentric societies. Narrated in first person, Swift successfully portrays Gulliver’s thoughts and reactions as he faces struggles of integration throughout his travels. Beginning with the introduction of Gulliver, an educated ship’s surgeon, who after a series of unfortunate events is victim to repeated shipwrecks, desertions, and set adrift. His first of several misadventures sees him washed up on the shores of Lilliput, home to the less than six inches tall Lilliputians, where he wakes up to the sounds of scurrying beneath him. However, roles are reversed when his misfortunes lead him to Brobdingnag, a land occupied by giants where he must experience life as an inferior and fragile being. Subsequently, he comes across a society of oppressive theoreticians, and finally an intellectual, superior race. Divided between the known and the unknown, Gulliver must put aside his prejudgments and experience the unfamiliar societies first hand. As the novel gradually progresses, the transformation of the narrator becomes evident as he draws conclusions from each and every one of his adventures. Written by the master of satire, Jonathan Swift has not only created a story of adventure, but also cunningly attacks the mere nature of society in between its lines. Abuse of power, criticism of human nature, politics, and individualism are just some of the themes explored during the enlightening journeys of the venturesome Gulliver. Swift’s witty use of metaphors and satirical style serves as a puzzle waiting to be solved. An adventure story for the young, but a critical piece for the mature, the novel has a bit of everything and appeals to all age groups. The details in which the locations are described, the escapism it offers, and its openness to interpretation is what makes Gulliver’s Travels a timeless piece of literature.',
      playlist_chapters: [
        {
          chapter: 0,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_00_swift_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_01_swift_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_02_swift_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_03_swift_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_04_swift_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_05_swift_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_06_swift_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_07_swift_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_08_swift_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_09_swift_64kb.mp3',
        },
        {
          chapter: 10,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_10_swift_64kb.mp3',
        },
        {
          chapter: 11,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_11_swift_64kb.mp3',
        },
        {
          chapter: 12,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_12_swift_64kb.mp3',
        },
        {
          chapter: 13,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_13_swift_64kb.mp3',
        },
        {
          chapter: 14,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_14_swift_64kb.mp3',
        },
        {
          chapter: 15,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_15_swift_64kb.mp3',
        },
        {
          chapter: 16,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_16_swift_64kb.mp3',
        },
        {
          chapter: 17,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_17_swift_64kb.mp3',
        },
        {
          chapter: 18,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_18_swift_64kb.mp3',
        },
        {
          chapter: 19,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_19_swift_64kb.mp3',
        },
        {
          chapter: 20,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_20_swift_64kb.mp3',
        },
        {
          chapter: 21,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_21_swift_64kb.mp3',
        },
        {
          chapter: 22,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_22_swift_64kb.mp3',
        },
        {
          chapter: 23,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_23_swift_64kb.mp3',
        },
        {
          chapter: 24,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_24_swift_64kb.mp3',
        },
        {
          chapter: 25,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_25_swift_64kb.mp3',
        },
        {
          chapter: 26,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_26_swift_64kb.mp3',
        },
        {
          chapter: 27,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_27_swift_64kb.mp3',
        },
        {
          chapter: 28,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_28_swift_64kb.mp3',
        },
        {
          chapter: 29,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_29_swift_64kb.mp3',
        },
        {
          chapter: 30,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_30_swift_64kb.mp3',
        },
        {
          chapter: 31,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_31_swift_64kb.mp3',
        },
        {
          chapter: 32,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_32_swift_64kb.mp3',
        },
        {
          chapter: 33,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_33_swift_64kb.mp3',
        },
        {
          chapter: 34,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_34_swift_64kb.mp3',
        },
        {
          chapter: 35,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_35_swift_64kb.mp3',
        },
        {
          chapter: 36,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_36_swift_64kb.mp3',
        },
        {
          chapter: 37,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_37_swift_64kb.mp3',
        },
        {
          chapter: 38,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_38_swift_64kb.mp3',
        },
        {
          chapter: 39,
          src: 'http://www.archive.org/download/gulliver_ld_librivox/gulliverstravels_39_swift_64kb.mp3',
        },
      ],
      createdAt: '2024-01-19T16:13:43.133Z',
      updatedAt: '2024-01-19T16:13:43.133Z',
      __v: 0,
    },
    {
      _id: '65aa9fb68f0378eb01060051',
      id: '4ff42553-03d0-4201-bae5-298c7c40c6c4',
      book_image:
        'https://www.loyalbooks.com/image/detail/Poems-Every-Child-Should-Know.jpg',
      book_genres: [
        'Adventure',
        'Animals',
        'Kids',
        'Fantasy',
        'Fiction',
        'Humor',
        'Literature',
        'Poetry',
      ],
      book_title: 'Poems Every Child Should Know',
      book_desc:
        "  A treasure trove of more than two hundred poems, this gem of an anthology compiled by Mary E Burt is indeed a most valuable set of poems to read or listen to. Published in 1904, Poems Every Child Should Know contains some well-loved verses like Thomas Gray's Elegy Written in a Country Churchyard, Lewis Carroll's delightful parody Father William, Felicia Hemans' deeply-moving Casablanca and other favorites. It also has lesser-known but equally beautiful pieces like Henry Wadsworth Longfellow's The Arrow and The Song, Robert Browning's The Incident of the French Camp, Eugene Field's nonsense lyrics Wynken, Blynken and Nod and a host of other wonderful verses. For modern day children, unaccustomed to reading and memorizing poetry, the book is a throwback to the days when this was the norm in most classrooms and homes. Fragments from Shakespeare's Julius Caesar, in which Mark Antony pays tribute to the dead Brutus, Polonius' advice to his son Laertes from Hamlet with the stirring lines, “This above all: to thine own self be true...” are some of the masterpieces contained here. Poems Every Child Should Know also contained some of the most famous poems in English by poets like Wordsworth, Shelley, Keats, Browning and Milton. American poets like Walt Whitman are featured here with their immortal lines in poems like Song of Myself. Another famous American poet found here is Edgar Allan Poe with his iconic The Raven. The book is divided into six parts, with a very interesting and self explanatory preface by the author. She begins with something that readers would say when they first encounter a poetry anthology: “Is this another collection of stupid poems that children cannot use?” and goes on to explain how she selected the ones included here. Most of them were picked because they were short enough for a child to memorize. This is a now forgotten activity that can give hours of pleasure as you recall the lines long after you've put away the book. Others were chosen for the heroic and patriotic sentiments, like The Star Spangled Banner, Lord Ullin's Daughter, The Charge of the Light Brigade, Horatius at the Bridge and a host of other inspiring poems. Mary Elizabeth Burt was a gifted teacher who believed that poetry had the power to inspire, educate and mold young minds so that they could mature into valuable and useful citizens of the country. For modern day readers, this is indeed a delightful collection, which offers endless hours of pleasure as you thumb through rediscovering old favorites, and enjoying new ones.",
      playlist_chapters: [
        {
          chapter: 0,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_01_burt_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_02_burt_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_03_burt_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_04_burt_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_05_burt_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_06_burt_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_07_burt_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_08_burt_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_09_burt_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_10_burt_64kb.mp3',
        },
        {
          chapter: 10,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_11_burt_64kb.mp3',
        },
        {
          chapter: 11,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_12_burt_64kb.mp3',
        },
        {
          chapter: 12,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_13_burt_64kb.mp3',
        },
        {
          chapter: 13,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_14_burt_64kb.mp3',
        },
        {
          chapter: 14,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_15_burt_64kb.mp3',
        },
        {
          chapter: 15,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_16_burt_64kb.mp3',
        },
        {
          chapter: 16,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_17_burt_64kb.mp3',
        },
        {
          chapter: 17,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_18_burt_64kb.mp3',
        },
        {
          chapter: 18,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_19_burt_64kb.mp3',
        },
        {
          chapter: 19,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_20_burt_64kb.mp3',
        },
        {
          chapter: 20,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_21_burt_64kb.mp3',
        },
        {
          chapter: 21,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_22_burt_64kb.mp3',
        },
        {
          chapter: 22,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_23_burt_64kb.mp3',
        },
        {
          chapter: 23,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_24_burt_64kb.mp3',
        },
        {
          chapter: 24,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_25_burt_64kb.mp3',
        },
        {
          chapter: 25,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_26_burt_64kb.mp3',
        },
        {
          chapter: 26,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_27_burt_64kb.mp3',
        },
        {
          chapter: 27,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_28_burt_64kb.mp3',
        },
        {
          chapter: 28,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_29_burt_64kb.mp3',
        },
        {
          chapter: 29,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_30_burt_64kb.mp3',
        },
        {
          chapter: 30,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_31_burt_64kb.mp3',
        },
        {
          chapter: 31,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_32_burt_64kb.mp3',
        },
        {
          chapter: 32,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_33_burt_64kb.mp3',
        },
        {
          chapter: 33,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_34_burt_64kb.mp3',
        },
        {
          chapter: 34,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_35_burt_64kb.mp3',
        },
        {
          chapter: 35,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_36_burt_64kb.mp3',
        },
        {
          chapter: 36,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_37_burt_64kb.mp3',
        },
        {
          chapter: 37,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_38_burt_64kb.mp3',
        },
        {
          chapter: 38,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_39_burt_64kb.mp3',
        },
        {
          chapter: 39,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_40_burt_64kb.mp3',
        },
        {
          chapter: 40,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_41_burt_64kb.mp3',
        },
        {
          chapter: 41,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_42_burt_64kb.mp3',
        },
        {
          chapter: 42,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_43_burt_64kb.mp3',
        },
        {
          chapter: 43,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_44_burt_64kb.mp3',
        },
        {
          chapter: 44,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_45_burt_64kb.mp3',
        },
        {
          chapter: 45,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_46_burt_64kb.mp3',
        },
        {
          chapter: 46,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_47_burt_64kb.mp3',
        },
        {
          chapter: 47,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_48_burt_64kb.mp3',
        },
        {
          chapter: 48,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_49_burt_64kb.mp3',
        },
        {
          chapter: 49,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_50_burt_64kb.mp3',
        },
        {
          chapter: 50,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_51_burt_64kb.mp3',
        },
        {
          chapter: 51,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_52_burt_64kb.mp3',
        },
        {
          chapter: 52,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_53_burt_64kb.mp3',
        },
        {
          chapter: 53,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_54_burt_64kb.mp3',
        },
        {
          chapter: 54,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_55_burt_64kb.mp3',
        },
        {
          chapter: 55,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_56_burt_64kb.mp3',
        },
        {
          chapter: 56,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_57_burt_64kb.mp3',
        },
        {
          chapter: 57,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_58_burt_64kb.mp3',
        },
        {
          chapter: 58,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_59_burt_64kb.mp3',
        },
        {
          chapter: 59,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_60_burt_64kb.mp3',
        },
        {
          chapter: 60,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_61_burt_64kb.mp3',
        },
        {
          chapter: 61,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_62_burt_64kb.mp3',
        },
        {
          chapter: 62,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_63_burt_64kb.mp3',
        },
        {
          chapter: 63,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_64_burt_64kb.mp3',
        },
        {
          chapter: 64,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_65_burt_64kb.mp3',
        },
        {
          chapter: 65,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_66_burt_64kb.mp3',
        },
        {
          chapter: 66,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_67_burt_64kb.mp3',
        },
        {
          chapter: 67,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_68_burt_64kb.mp3',
        },
        {
          chapter: 68,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_69_burt_64kb.mp3',
        },
        {
          chapter: 69,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_70_burt_64kb.mp3',
        },
        {
          chapter: 70,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_71_burt_64kb.mp3',
        },
        {
          chapter: 71,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_72_burt_64kb.mp3',
        },
        {
          chapter: 72,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_73_burt_64kb.mp3',
        },
        {
          chapter: 73,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_74_burt_64kb.mp3',
        },
        {
          chapter: 74,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_75_burt_64kb.mp3',
        },
        {
          chapter: 75,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_76_burt_64kb.mp3',
        },
        {
          chapter: 76,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_77_burt_64kb.mp3',
        },
        {
          chapter: 77,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_78_burt_64kb.mp3',
        },
        {
          chapter: 78,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_79_burt_64kb.mp3',
        },
        {
          chapter: 79,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_80_burt_64kb.mp3',
        },
        {
          chapter: 80,
          src: 'http://www.archive.org/download/poems_every_child_should_know_librivox/poems_every_child_81_burt_64kb.mp3',
        },
      ],
      createdAt: '2024-01-19T16:13:43.133Z',
      updatedAt: '2024-01-19T16:13:43.133Z',
      __v: 0,
    },
    {
      _id: '65aa9fb68f0378eb0106003e',
      id: '8697bbde-a131-4261-aaf7-a88ed3810449',
      book_image: 'https://www.loyalbooks.com/image/detail/monte_cristo.jpg',
      book_genres: [
        'Adventure',
        'Fiction',
        'Historical Fiction',
        'Literature',
        'Romance',
      ],
      book_title: 'The Count of Monte Cristo',
      book_desc:
        ' Written by French author Alexandre Dumas, The Count of Monte Cristo follows the life of Edmond Dantes as he embarks on a journey of revenge after being wrongly imprisoned and set up by none other than his so-called friends. Set during the years after the fall of Napoleon’s empire, the story unwinds in several locations including Paris, Marseilles, Rome, Monte Cristo and Constantinople. A handsome young sailor and soon to be ship captain Edmond Dantes seems to have it all in life, as he returns to Marseilles to wed the love of his life and fiancée, the beautiful Mercedes. However, Edmond’s supposed friends have a hard time staying indifferent to his growing success, and their true jealous nature is revealed. Each has their own reason to envy Edmond. Danglers, who is a colleague of Edmonds, envies his career success, Fernand Mondego is in love with Edmonds fiancée, while his neighbor Caderousse is envious of his luck in life in general. Just as Edmond is about to pick the fruits that life has bore him, he is framed by the dangerously jealous trio, accused of being a traitor and unjustly sentenced to life in prison. As Edmond makes certain acquaintances in prison, he is determined to escape from his confinement and take the vengeance that is rightfully his. When Edmond does in turn return to the world of the free, he acquires a new identity and is motivated by his hunger for revenge. It is not said in vain that revenge is a dish best served cold. An intriguing novel of justice, vengeance, mercy and redemption, The Count of Monte Cristo follows its protagonist as he goes through his numerous masks shifting into several aliases including the Count of Monte Cristo, Sinbad the Sailor, Lord Wilmore, and Abbé Busoni. What makes the novel even more captivating is the fact that it is based on a true story. Captivating and keeping the reader at full throttle from beginning to end, it is no wonder the novel is a worldwide literary classic. ',
      playlist_chapters: [
        {
          chapter: 0,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_001_dumas_64kb.mp3',
        },
        {
          chapter: 1,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_002_dumas_64kb.mp3',
        },
        {
          chapter: 2,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_003_dumas_64kb.mp3',
        },
        {
          chapter: 3,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_004_dumas_64kb.mp3',
        },
        {
          chapter: 4,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_005_dumas_64kb.mp3',
        },
        {
          chapter: 5,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_006_dumas_64kb.mp3',
        },
        {
          chapter: 6,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_007_dumas_64kb.mp3',
        },
        {
          chapter: 7,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_008_dumas_64kb.mp3',
        },
        {
          chapter: 8,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_009_dumas_64kb.mp3',
        },
        {
          chapter: 9,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_010_dumas_64kb.mp3',
        },
        {
          chapter: 10,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_011_dumas_64kb.mp3',
        },
        {
          chapter: 11,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_012_dumas_64kb.mp3',
        },
        {
          chapter: 12,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_013_dumas_64kb.mp3',
        },
        {
          chapter: 13,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_014_dumas_64kb.mp3',
        },
        {
          chapter: 14,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_015_dumas_64kb.mp3',
        },
        {
          chapter: 15,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_016_dumas_64kb.mp3',
        },
        {
          chapter: 16,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_017_dumas_64kb.mp3',
        },
        {
          chapter: 17,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_018_dumas_64kb.mp3',
        },
        {
          chapter: 18,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_019_dumas_64kb.mp3',
        },
        {
          chapter: 19,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_020_dumas_64kb.mp3',
        },
        {
          chapter: 20,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_021_dumas_64kb.mp3',
        },
        {
          chapter: 21,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_022_dumas_64kb.mp3',
        },
        {
          chapter: 22,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_023_dumas_64kb.mp3',
        },
        {
          chapter: 23,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_024_dumas_64kb.mp3',
        },
        {
          chapter: 24,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_025_dumas_64kb.mp3',
        },
        {
          chapter: 25,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_025alt_dumas_64kb.mp3',
        },
        {
          chapter: 26,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_026_dumas_64kb.mp3',
        },
        {
          chapter: 27,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_026alt_dumas_64kb.mp3',
        },
        {
          chapter: 28,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_027_dumas_64kb.mp3',
        },
        {
          chapter: 29,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_028_dumas_64kb.mp3',
        },
        {
          chapter: 30,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_029_dumas_64kb.mp3',
        },
        {
          chapter: 31,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_030_dumas_64kb.mp3',
        },
        {
          chapter: 32,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_031_dumas_64kb.mp3',
        },
        {
          chapter: 33,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_031alt_dumas_64kb.mp3',
        },
        {
          chapter: 34,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_032_dumas_64kb.mp3',
        },
        {
          chapter: 35,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_032alt_dumas_64kb.mp3',
        },
        {
          chapter: 36,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_033_dumas_64kb.mp3',
        },
        {
          chapter: 37,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_033alt_dumas_64kb.mp3',
        },
        {
          chapter: 38,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_034a_dumas_64kb.mp3',
        },
        {
          chapter: 39,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_034b_dumas_64kb.mp3',
        },
        {
          chapter: 40,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_035_dumas_64kb.mp3',
        },
        {
          chapter: 41,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_036_dumas_64kb.mp3',
        },
        {
          chapter: 42,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_037_dumas_64kb.mp3',
        },
        {
          chapter: 43,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_038_dumas_64kb.mp3',
        },
        {
          chapter: 44,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_039_dumas_64kb.mp3',
        },
        {
          chapter: 45,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_040_dumas_64kb.mp3',
        },
        {
          chapter: 46,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_041_dumas_64kb.mp3',
        },
        {
          chapter: 47,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_042_dumas_64kb.mp3',
        },
        {
          chapter: 48,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_043_dumas_64kb.mp3',
        },
        {
          chapter: 49,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_043alt_dumas_64kb.mp3',
        },
        {
          chapter: 50,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_044_dumas_64kb.mp3',
        },
        {
          chapter: 51,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_044alt_dumas_64kb.mp3',
        },
        {
          chapter: 52,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_045_dumas_64kb.mp3',
        },
        {
          chapter: 53,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_045alt_dumas_64kb.mp3',
        },
        {
          chapter: 54,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_046_dumas_64kb.mp3',
        },
        {
          chapter: 55,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_047_dumas_64kb.mp3',
        },
        {
          chapter: 56,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_048_dumas_64kb.mp3',
        },
        {
          chapter: 57,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_049_dumas_64kb.mp3',
        },
        {
          chapter: 58,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_050_dumas_64kb.mp3',
        },
        {
          chapter: 59,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_051_dumas_64kb.mp3',
        },
        {
          chapter: 60,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_052_dumas_64kb.mp3',
        },
        {
          chapter: 61,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_053_dumas_64kb.mp3',
        },
        {
          chapter: 62,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_054_dumas_64kb.mp3',
        },
        {
          chapter: 63,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_055_dumas_64kb.mp3',
        },
        {
          chapter: 64,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_056_dumas_64kb.mp3',
        },
        {
          chapter: 65,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_057_dumas_64kb.mp3',
        },
        {
          chapter: 66,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_058_dumas_64kb.mp3',
        },
        {
          chapter: 67,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_059_dumas_64kb.mp3',
        },
        {
          chapter: 68,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_060_dumas_64kb.mp3',
        },
        {
          chapter: 69,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_061_dumas_64kb.mp3',
        },
        {
          chapter: 70,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_062_dumas_64kb.mp3',
        },
        {
          chapter: 71,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_063_dumas_64kb.mp3',
        },
        {
          chapter: 72,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_064_dumas_64kb.mp3',
        },
        {
          chapter: 73,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_065_dumas_64kb.mp3',
        },
        {
          chapter: 74,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_066_dumas_64kb.mp3',
        },
        {
          chapter: 75,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_067_dumas_64kb.mp3',
        },
        {
          chapter: 76,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_068_dumas_64kb.mp3',
        },
        {
          chapter: 77,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_069_dumas_64kb.mp3',
        },
        {
          chapter: 78,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_070_dumas_64kb.mp3',
        },
        {
          chapter: 79,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_071_dumas_64kb.mp3',
        },
        {
          chapter: 80,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_072_dumas_64kb.mp3',
        },
        {
          chapter: 81,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_073a_dumas_64kb.mp3',
        },
        {
          chapter: 82,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_073b_dumas_64kb.mp3',
        },
        {
          chapter: 83,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_074_dumas_64kb.mp3',
        },
        {
          chapter: 84,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_075_dumas_64kb.mp3',
        },
        {
          chapter: 85,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_076_dumas_64kb.mp3',
        },
        {
          chapter: 86,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_077_dumas_64kb.mp3',
        },
        {
          chapter: 87,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_078_dumas_64kb.mp3',
        },
        {
          chapter: 88,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_079_dumas_64kb.mp3',
        },
        {
          chapter: 89,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_080_dumas_64kb.mp3',
        },
        {
          chapter: 90,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_081_dumas_64kb.mp3',
        },
        {
          chapter: 91,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_082_dumas_64kb.mp3',
        },
        {
          chapter: 92,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_083_dumas_64kb.mp3',
        },
        {
          chapter: 93,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_084_dumas_64kb.mp3',
        },
        {
          chapter: 94,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_085_dumas_64kb.mp3',
        },
        {
          chapter: 95,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_086_dumas_64kb.mp3',
        },
        {
          chapter: 96,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_087_dumas_64kb.mp3',
        },
        {
          chapter: 97,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_088_dumas_64kb.mp3',
        },
        {
          chapter: 98,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_089_dumas_64kb.mp3',
        },
        {
          chapter: 99,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_090_dumas_64kb.mp3',
        },
        {
          chapter: 100,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_091_dumas_64kb.mp3',
        },
        {
          chapter: 101,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_092_dumas_64kb.mp3',
        },
        {
          chapter: 102,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_093_dumas_64kb.mp3',
        },
        {
          chapter: 103,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_094_dumas_64kb.mp3',
        },
        {
          chapter: 104,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_094alt_dumas_64kb.mp3',
        },
        {
          chapter: 105,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_095_dumas_64kb.mp3',
        },
        {
          chapter: 106,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_096_dumas_64kb.mp3',
        },
        {
          chapter: 107,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_097_dumas_64kb.mp3',
        },
        {
          chapter: 108,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_098_dumas_64kb.mp3',
        },
        {
          chapter: 109,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_099_dumas_64kb.mp3',
        },
        {
          chapter: 110,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_100_dumas_64kb.mp3',
        },
        {
          chapter: 111,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_101_dumas_64kb.mp3',
        },
        {
          chapter: 112,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_102_dumas_64kb.mp3',
        },
        {
          chapter: 113,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_103_dumas_64kb.mp3',
        },
        {
          chapter: 114,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_104_dumas_64kb.mp3',
        },
        {
          chapter: 115,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_105_dumas_64kb.mp3',
        },
        {
          chapter: 116,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_106_dumas_64kb.mp3',
        },
        {
          chapter: 117,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_107_dumas_64kb.mp3',
        },
        {
          chapter: 118,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_108_dumas_64kb.mp3',
        },
        {
          chapter: 119,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_109_dumas_64kb.mp3',
        },
        {
          chapter: 120,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_110_dumas_64kb.mp3',
        },
        {
          chapter: 121,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_111_dumas_64kb.mp3',
        },
        {
          chapter: 122,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_112_dumas_64kb.mp3',
        },
        {
          chapter: 123,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_113_dumas_64kb.mp3',
        },
        {
          chapter: 124,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_114_dumas_64kb.mp3',
        },
        {
          chapter: 125,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_115_dumas_64kb.mp3',
        },
        {
          chapter: 126,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_116_dumas_64kb.mp3',
        },
        {
          chapter: 127,
          src: 'http://www.archive.org/download/count_monte_cristo_0711_librivox/count_of_monte_cristo_117_dumas_64kb.mp3',
        },
      ],
      createdAt: '2024-01-19T16:13:43.133Z',
      updatedAt: '2024-01-19T16:13:43.133Z',
      __v: 0,
    },
  ],
  nextPage: 2,
  page: 1,
  prevPage: null,
  totalDocs: 22,
  totalPages: 3,
};
