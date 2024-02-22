import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('application render', () => {
    render(<App />)
    const jobTitleElement = screen.getByRole('heading', { level: 3});
    expect(jobTitleElement).toBeInTheDocument(); 

    const partTitleElement = screen.getByRole('heading', { level: 4 });
    expect(partTitleElement).toBeInTheDocument();

    const closeButtonElement = screen.getByTitle('toggle');
    expect(closeButtonElement).toBeInTheDocument();
  })
})