import { ChangeEvent, FormEvent } from 'react';

import styles from './styles.module.scss';

interface ISearchBarProps {
  searchValue: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

const getInputStyle = (searchValue: string): string => {
  const inputStyles = [styles.searchBar__input];

  if (!searchValue) inputStyles.push(styles.searchBar__input_hidden);

  return inputStyles.join(' ');
};

export default function SearchBar({ searchValue, changeHandler, submitHandler }: ISearchBarProps) {
  const inputStyles = getInputStyle(searchValue);

  return (
    <form className={styles.searchBar} onSubmit={submitHandler}>
      <input
        className={inputStyles}
        id="searchBar"
        type="text"
        name="search"
        placeholder="Character name"
        maxLength={17}
        value={searchValue}
        onChange={changeHandler}
      />
      <button className={styles.searchBar__button} type="submit">
        Search
      </button>
    </form>
  );
}
