import styles from './styles.module.scss';

interface ISearchBarProps {
  searchValue: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const getSearchBarStyle = (searchValue: string): string => {
  const searchStyles = [styles.searchBar__input];

  if (!searchValue) searchStyles.push(styles.searchBar__input_hidden);

  return searchStyles.join(' ');
};

export default function SearchBar({ searchValue, changeHandler }: ISearchBarProps) {
  const serchBarStyles = getSearchBarStyle(searchValue);

  return (
    <label className={styles.searchBar}>
      <input
        className={serchBarStyles}
        id="searchBar"
        type="text"
        placeholder="Search"
        value={searchValue}
        onChange={changeHandler}
      />
    </label>
  );
}
