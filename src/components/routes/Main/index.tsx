import { useState, useEffect, useRef } from 'react';
import SearchBar from 'components/UI/SearchBar';
import ProductCard from 'components/ProductCard';
import { getInitialSearch, getInitialProducts } from 'helpers/localStorageHandlers';
import fetchProducts from 'helpers/fetchProducts';

import styles from './styles.module.scss';

export interface IProducts {
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

export default function Main() {
  const [search, setSearch] = useState<string>(getInitialSearch);
  const [products, setProducts] = useState<IProduct[]>(getInitialProducts);
  const [productsToShow, setProductsToShow] = useState<IProduct[]>([]);
  const searchRef = useRef(search);
  const productsRef = useRef(products);

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  const onMount = () => {
    const onBeforeUnload = () => {
      localStorage.setItem('searchValue', searchRef.current);
      localStorage.setItem('products', JSON.stringify(productsRef.current));
    };

    if (products.length === 0) fetchProducts(setProducts);

    searchRef.current = search;
    productsRef.current = products;

    setProductsToShow(products);

    window.addEventListener('beforeunload', onBeforeUnload);

    return () => {
      localStorage.setItem('searchValue', searchRef.current);
      localStorage.setItem('products', JSON.stringify(productsRef.current));

      window.removeEventListener('beforeunload', onBeforeUnload);
    };
  };

  const onUpdate = () => {
    searchRef.current = search;
    productsRef.current = products;

    if (search) {
      const filteredProducts = products.filter((product) =>
        Object.values(product).join('').toLocaleLowerCase().includes(search.toLowerCase())
      );

      setProductsToShow(filteredProducts);
    } else {
      setProductsToShow(products);
    }
  };

  useEffect(onMount, [products]);

  useEffect(onUpdate, [search]);

  return (
    <main className={styles.main}>
      <SearchBar searchValue={search} changeHandler={searchChangeHandler} />
      {productsToShow.length ? (
        <div className={styles.productList}>
          {productsToShow.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <p className={styles.notFound}>Products not found!</p>
      )}
    </main>
  );
}
