import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { act } from 'react-dom/test-utils';

describe('App', () => {
  test('application render', async() => {
    render(<App />)
    const jobTitleElement = screen.getByRole('heading', { level: 3});
    expect(jobTitleElement).toBeInTheDocument(); 

    const partTitleElement = screen.getByRole('heading', { level: 4 });
    expect(partTitleElement).toBeInTheDocument();

    const closeButtonElement = screen.getByTitle('toggle');
    expect(closeButtonElement).toBeInTheDocument();

    const formElement = screen.getByLabelText('form-wrapper');

    await userEvent.click(closeButtonElement);
    expect(formElement).not.toBeVisible();

    const jestLogoElement = screen.getByTestId('jest-logo');
    expect(jestLogoElement).toBeInTheDocument();
  })
})