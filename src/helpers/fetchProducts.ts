import { IProduct, IProducts } from 'components/routes/Main';
import { SetStateAction } from 'react';

const LIMIT = 20;
const API_URL = `https://dummyjson.com/products?limit=${LIMIT}`;

const fetchProducts = async (
  setProducts: React.Dispatch<SetStateAction<IProduct[]>>
): Promise<void> => {
  await fetch(API_URL)
    .then((res) => res.json())
    .then((products: IProducts) => setProducts(products.products));
};

export default fetchProducts;
