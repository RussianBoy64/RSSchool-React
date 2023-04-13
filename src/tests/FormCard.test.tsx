import { screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import FormCard from 'components/FormCard';

const formCardData = {
  name: 'Vladimir',
  date: '29-10-1990',
  packaging: 'Gift',
  pay: 'Card',
  photo: '',
  agreement: 'true',
};

it('Layout should render', () => {
  render(
    <Provider store={store}>
      <FormCard {...formCardData} />{' '}
    </Provider>
  );

  expect(screen.getByText(/Vladimir/i)).toBeInTheDocument();
  expect(screen.getByText(/29-10-1990/i)).toBeInTheDocument();
  expect(screen.getByText(/Gift/i)).toBeInTheDocument();
});
