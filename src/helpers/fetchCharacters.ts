import { SetStateAction } from 'react';

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

export interface ICharacters {
  data: ICharacter[];
  pagination: {
    current_page: number;
    has_next_page: boolean;
    last_visible_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
}

export const initialCharacters: ICharacters = {
  data: [],
  pagination: {
    current_page: 0,
    has_next_page: false,
    last_visible_page: 0,
    items: {
      count: 0,
      total: 0,
      per_page: 0,
    },
  },
};

const LIMIT = 20;
const API_URL = `https://api.jikan.moe/v4/characters?limit=${LIMIT}`;

const fetchProducts = async (
  setCharacters: React.Dispatch<SetStateAction<ICharacters>>
): Promise<void> => {
  await fetch(API_URL)
    .then((res) => res.json())
    .then((charactersData) => {
      const characters = {
        data: charactersData.data,
        pagination: charactersData.pagination,
      };
      setCharacters(characters);
    });
};

export default fetchProducts;
