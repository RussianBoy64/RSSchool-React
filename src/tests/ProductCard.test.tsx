import { screen, render } from '@testing-library/react';

import ProductCard from 'components/ProductCard';
import ThumbnailPagination from 'components/ProductCard/ThumbnailPagination';

const productData = {
  id: 0,
  title: 'Iphone 7',
  description: 'Best phone',
  price: 999,
  discountPercentage: 15,
  rating: 5,
  stock: 99,
  brand: 'Apple',
  category: 'gadgets',
  thumbnail: '',
  images: ['img1', 'img2'],
};

it('ProductCard should render', () => {
  render(<ProductCard product={productData} />);

  expect(screen.getByText(/Iphone 7/i)).toBeInTheDocument();
  expect(screen.getByText(/Best phone/i)).toBeInTheDocument();
  expect(screen.getByText(/999/i)).toBeInTheDocument();
});

it('ThumbnailPagination should render', () => {
  render(<ThumbnailPagination currentImage={2} images={productData.images} />);

  const bullets = screen.getAllByTestId('pagination');
  expect(bullets).toHaveLength(2);
});
