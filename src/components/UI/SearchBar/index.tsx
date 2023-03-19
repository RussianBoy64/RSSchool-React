import { Component } from 'react';

import styles from './styles.module.scss';

interface ISearchBarProps {
  searchValue: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ISearchBarState {
  isInputHidden: boolean;
}

export default class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      isInputHidden: true,
    };
  }

  setSearchBarStyle() {
    const serchBArStyles = [styles.searchBar__input];

    if (this.state.isInputHidden) serchBArStyles.push(styles.searchBar__input_hidden);

    return serchBArStyles.join(' ');
  }

  static getDerivedStateFromProps(props: ISearchBarProps) {
    return props.searchValue ? { isInputHidden: false } : { isInputHidden: true };
  }

  render() {
    return (
      <label className={styles.searchBar}>
        <input
          className={this.setSearchBarStyle()}
          id="searchBar"
          type="text"
          placeholder="Search"
          value={this.props.searchValue}
          onChange={this.props.changeHandler}
        />
      </label>
    );
  }
}
