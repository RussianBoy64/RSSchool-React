import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import Main from 'components/routes/Main';

describe('Main', () => {
  test('fetch and display characters', async () => {
    const { findByText, findAllByTestId } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const narutoCard = await findByText('Naruto');
    const sasukeCard = await findByText('Sasuke');

    expect(narutoCard).toBeInTheDocument();
    expect(sasukeCard).toBeInTheDocument();
    expect(await findAllByTestId('character')).toHaveLength(2);
  });

  test('modal should open', async () => {
    const { findByText, findByTestId } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const narutoCard = await findByText('Naruto');

    userEvent.click(narutoCard);

    const backdrop = await findByTestId('backdrop');
    const narutoModal = await findByText(/Info about naruto/i);

    expect(backdrop).toBeInTheDocument();
    expect(narutoModal).toBeInTheDocument();
  });
});
