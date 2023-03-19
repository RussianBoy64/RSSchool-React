import { Component } from 'react';
import SearchBar from 'components/UI/SearchBar';
import ProductCard from 'components/ProductCard';

import styles from './styles.module.scss';

interface IProducts {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface IMainState {
  search: string;
  products: IProduct[];
}

export default class Main extends Component<unknown, IMainState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      search: '',
      products: [],
    };
  }

  searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, search: event.target.value });
  };

  async fetchProducts(): Promise<void> {
    await fetch('https://dummyjson.com/products?limit=20')
      .then((res) => res.json())
      .then((products: IProducts) => this.setState({ products: products.products }));
  }

  async getProductsFromStorage(productsJSON: string): Promise<void> {
    const products = await JSON.parse(productsJSON);
    this.setState({ ...this.state, products });
  }

  componentDidMount() {
    const search = localStorage.getItem('searchValue');
    const products = localStorage.getItem('products');

    if (search) this.setState({ ...this.state, search });

    if (!products) {
      this.fetchProducts();
    } else {
      this.getProductsFromStorage(products);
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.search);

    if (this.state.products.length) {
      localStorage.setItem('products', JSON.stringify(this.state.products));
    }
  }

  render() {
    const { search } = this.state;
    let { products } = this.state;

    if (search) {
      products = products.filter((product) =>
        Object.values(product).join('').toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    return (
      <main className={styles.main}>
        <SearchBar searchValue={this.state.search} changeHandler={this.searchChangeHandler} />

        <div className={styles.productList}>
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </main>
    );
  }
}
