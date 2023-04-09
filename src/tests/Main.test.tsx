import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from 'components/routes/Main';

describe('Main', () => {
  test('fetch and display characters', async () => {
    const { findByText, findAllByTestId } = render(<Main />);
    const narutoCard = await findByText('Naruto');
    const sasukeCard = await findByText('Sasuke');

    expect(narutoCard).toBeInTheDocument();
    expect(sasukeCard).toBeInTheDocument();
    expect(await findAllByTestId('character')).toHaveLength(2);
  });

  test('modal should open', async () => {
    const { findByText, findByTestId } = render(<Main />);

    const narutoCard = await findByText('Naruto');

    userEvent.click(narutoCard);

    const backdrop = await findByTestId('backdrop');
    const narutoModal = await findByText(/Info about naruto/i);

    expect(backdrop).toBeInTheDocument();
    expect(narutoModal).toBeInTheDocument();
  });
});
