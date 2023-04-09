import { useState, useEffect, useRef, FormEvent } from 'react';
import SearchBar from 'components/UI/SearchBar';
import CharacterCard from 'components/CharacterCard';
import Backdrop from 'components/UI/Backdrop';
import CharacterInfo from 'components/CharacterInfo';
import { getInitialSearch } from 'helpers/localStorageHandlers';
import fetchCharacters, {
  ICharacter,
  ICharacters,
  initialCharacters,
} from 'helpers/fetchCharacters';

import styles from './styles.module.scss';

export default function Main() {
  const [search, setSearch] = useState<string>(getInitialSearch);
  const [characters, setCharacters] = useState<ICharacters>(initialCharacters);
  const [characterInfo, setCharacterInfo] = useState<null | ICharacter>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const searchRef = useRef(search);

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    fetchCharacters(search, setCharacters, setIsLoading, setError);
  };

  const onBeforeUnload = () => {
    localStorage.setItem('searchValue', searchRef.current);
  };

  const onMount = () => {
    searchRef.current = search;

    fetchCharacters(search, setCharacters, setIsLoading, setError);

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      localStorage.setItem('searchValue', searchRef.current);

      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  };

  const onSearchUpdate = () => {
    searchRef.current = search;
  };

  useEffect(onMount, []);

  useEffect(onSearchUpdate, [search]);

  return (
    <main className={styles.main}>
      <SearchBar
        searchValue={search}
        isLoading={isLoading}
        changeHandler={searchChangeHandler}
        submitHandler={searchSubmitHandler}
      />
      {error ? (
        <p className={styles.notFound}>{error.message}</p>
      ) : characters.data.length ? (
        <div className={styles.charactersList}>
          {characters.data.map((character) => (
            <CharacterCard
              character={character}
              closeBackdropHandler={setCharacterInfo}
              key={character.mal_id}
            />
          ))}
        </div>
      ) : (
        <p className={styles.notFound}>Characters not found!</p>
      )}
      {characterInfo && (
        <Backdrop closeBackdropHandler={setCharacterInfo}>
          <CharacterInfo character={characterInfo} />
        </Backdrop>
      )}
    </main>
  );
}
