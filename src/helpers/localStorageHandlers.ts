export const getInitialSearch = () => {
  const searchValue = window.localStorage.getItem('searchValue');

  return searchValue || '';
};

export const getInitialProducts = () => {
  const productsFromStorage = localStorage.getItem('products');

  return productsFromStorage ? JSON.parse(productsFromStorage) : [];
};
