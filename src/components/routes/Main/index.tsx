import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { setInputValue, setValueToSearch, setCharacterInfo } from 'redux/reducers/searchSlice';
import { useGetCharactersByNameQuery } from 'services/animeApi';
import SearchBar from 'components/UI/SearchBar';
import CharacterCard from 'components/CharacterCard';
import Backdrop from 'components/UI/Backdrop';
import CharacterInfo from 'components/CharacterInfo';

import styles from './styles.module.scss';

export default function Main() {
  const dispatch = useAppDispatch();
  const { inputValue, valueToSearch, characterInfo } = useAppSelector((state) => state.search);
  const { data, error, isFetching } = useGetCharactersByNameQuery(valueToSearch);

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  const searchSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(setValueToSearch());
  };

  return (
    <main className={styles.main}>
      <SearchBar
        searchValue={inputValue}
        isLoading={isFetching}
        changeHandler={searchChangeHandler}
        submitHandler={searchSubmitHandler}
      />
      {error ? (
        <p className={styles.notFound}>{`${error}`}</p>
      ) : data?.data.length ? (
        <div className={styles.charactersList}>
          {data.data.map((character) => (
            <CharacterCard
              character={character}
              showCharacterModal={setCharacterInfo}
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
