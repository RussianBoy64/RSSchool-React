import { useState, useEffect, useRef, FormEvent } from 'react';
import SearchBar from 'components/UI/SearchBar';
import CharacterCard from 'components/CharacterCard';
import { getInitialSearch } from 'helpers/localStorageHandlers';
import fetchCharacters, { ICharacters, initialCharacters } from 'helpers/fetchCharacters';

import styles from './styles.module.scss';

export default function Main() {
  const [search, setSearch] = useState<string>(getInitialSearch);
  const [characters, setCharacters] = useState<ICharacters>(initialCharacters);
  const searchRef = useRef(search);

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    fetchCharacters(search, setCharacters);
  };

  const onBeforeUnload = () => {
    localStorage.setItem('searchValue', searchRef.current);
  };

  const onMount = () => {
    console.log('Mount');
    searchRef.current = search;

    fetchCharacters(search, setCharacters);

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      localStorage.setItem('searchValue', searchRef.current);

      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  };

  const onSearchUpdate = () => {
    console.log('SearchUpdate');
    searchRef.current = search;
  };

  useEffect(onMount, []);

  useEffect(onSearchUpdate, [search]);

  return (
    <main className={styles.main}>
      <SearchBar
        searchValue={search}
        changeHandler={searchChangeHandler}
        submitHandler={searchSubmitHandler}
      />
      {characters.data.length ? (
        <div className={styles.charactersList}>
          {characters.data.map((character) => (
            <CharacterCard character={character} key={character.mal_id} />
          ))}
        </div>
      ) : (
        <p className={styles.notFound}>Characters not found!</p>
      )}
    </main>
  );
}
