import { Component } from 'react';
import SearchBar from 'components/UI/SearchBar';

import styles from './styles.module.scss';

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: number;
  images: string[];
}

interface IMainState {
  search: string;
  products: IProduct | null;
}

export default class Main extends Component<unknown, IMainState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      search: '',
      products: null,
    };
  }

  searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, search: event.target.value });
  };

  async fetchProducts() {
    await fetch('https://dummyjson.com/products/1')
      .then((res) => res.json())
      .then((products) => this.setState({ products }));
  }

  componentDidMount() {
    const search = localStorage.getItem('searchValue');
    if (search) this.setState({ ...this.state, search });
    this.fetchProducts();
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.search);
  }

  render() {
    return (
      <main className={styles.main}>
        <SearchBar searchValue={this.state.search} changeHandler={this.searchChangeHandler} />
        {/* {`${this.state.products?.brand}`} */}
      </main>
    );
  }
}
