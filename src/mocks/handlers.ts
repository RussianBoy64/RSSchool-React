import { rest } from 'msw';

export const handlers = [
  rest.get(`https://api.jikan.moe/v4/characters`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            mal_id: 1,
            url: 'http://fakeUrlpath/character/1',
            images: {
              jpg: {
                image_url: 'http://fakeUrlpath/characterJpg/1',
              },
              webp: {
                image_url: 'http://fakeUrlpath/characterWebp/1',
                small_image_url: 'http://fakeUrlpath/characterSmallWebp/1',
              },
            },
            name: 'Naruto',
            name_kanji: '',
            nicknames: ['Naruto', 'Baka'],
            about: 'Info about naruto',
            favorites: 32900,
          },
          {
            mal_id: 2,
            url: 'http://fakeUrlpath/character/2',
            images: {
              jpg: {
                image_url: 'http://fakeUrlpath/characterJpg/2',
              },
              webp: {
                image_url: 'http://fakeUrlpath/characterWebp/2',
                small_image_url: 'http://fakeUrlpath/characterSmallWebp/2',
              },
            },
            name: 'Sasuke',
            name_kanji: '',
            nicknames: ['Sasuke', 'Uchiha'],
            about: 'Info about Sasuke',
            favorites: 27495,
          },
        ],
        pagination: {
          current_page: 1,
          has_next_page: true,
          last_visible_page: 1,
          items: {
            count: 2,
            total: 120,
            per_page: 20,
          },
        },
      })
    );
  }),
];
