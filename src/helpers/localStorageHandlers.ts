export const getInitialSearch = () => {
  const searchValue = window.localStorage.getItem('searchValue');

  return searchValue || '';
};
