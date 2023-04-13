import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import App from 'App';
import Main from 'components/routes/Main';
import About from 'components/routes/About';
import Form from 'components/routes/Form';
import PageNotFound from 'components/routes/PageNotFound';

describe('App should render', () => {
  it('Layout should render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    const footerLink = screen.getByText(/russianboy64/i);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(footerLink).toBeInTheDocument();
  });

  it('Main page should render', () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const searchBar = screen.getByPlaceholderText(/character name/i);
    const notFoundInfo = screen.getByText(/characters not found/i);

    expect(searchBar).toBeInTheDocument();
    expect(notFoundInfo).toBeInTheDocument();
  });

  it('About should render', () => {
    render(<About />);

    const authorName = screen.getByRole('heading', { level: 2 });
    const authorInfo = screen.getByText(/I am 32 years old./i);

    expect(authorName).toBeInTheDocument();
    expect(authorInfo).toBeInTheDocument();
  });

  it('Form page should render', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const authorName = screen.getByRole('heading', { level: 2 });
    const authorInfo = screen.getByText(/Delivery form/i);

    expect(authorName).toBeInTheDocument();
    expect(authorInfo).toBeInTheDocument();
  });

  it('PageNotFound should render', () => {
    render(<PageNotFound />);

    const authorName = screen.getByRole('heading', { level: 4 });
    const authorInfo = screen.getByText('Oops! Page not found!');

    expect(authorName).toBeInTheDocument();
    expect(authorInfo).toBeInTheDocument();
  });
});
