import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ICharacterImages {
  jpg: {
    image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
  };
}

export interface ICharacter {
  mal_id: number;
  url: string;
  images: ICharacterImages;
  name: string;
  name_kanji: string;
  nicknames: string[];
  about: string;
  favorites: number;
}

interface Links {
  first: string | null;
  last: string | null;
  next: string | null;
  prev: string | null;
}

interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: { url: string | null; label: string; active: boolean }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface Pagination {
  current_page: number;
  has_next_page: boolean;
  last_visible_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

interface AnimeApi {
  data: ICharacter[];
  links: Links;
  meta: Meta;
  pagination: Pagination;
}

export interface ICharacters {
  characters: ICharacter[];
  pagination: Pagination;
}

const LIMIT = 20;
const API_URL = `https://api.jikan.moe/v4/characters?limit=${LIMIT}`;

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query<AnimeApi, string>({
      query: (name) => `&q=${name}`,
    }),
  }),
});

export const { useGetCharactersByNameQuery } = animeApi;
