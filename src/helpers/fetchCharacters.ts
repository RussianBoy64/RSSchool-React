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

const fetchCharacters = async (
  search: string,
  setCharacters: React.Dispatch<SetStateAction<ICharacters>>,
  setIsLoading: React.Dispatch<SetStateAction<boolean>>,
  setError: React.Dispatch<SetStateAction<null | Error>>
): Promise<void> => {
  const queryParams = `&q=${search}`;

  setIsLoading(true);

  await fetch(API_URL + queryParams)
    .then((res) => {
      if (!res.ok) {
        throw Error(`${res.status}: ${res.statusText}`);
      } else {
        return res.json();
      }
    })
    .then((charactersData) => {
      const characters = {
        data: charactersData.data,
        pagination: charactersData.pagination,
      };
      setCharacters(characters);
      setIsLoading(false);
      setError(null);
    })
    .catch((error) => {
      setError(error);
      setIsLoading(false);
    });
};

export default fetchCharacters;
