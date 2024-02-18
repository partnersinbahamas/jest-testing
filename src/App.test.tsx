import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('application render', () => {
    render(<App />)
    const jobTitleElement = screen.getByRole('heading', { name: 'Jop application form' });
    expect(jobTitleElement).toBeInTheDocument(); 

    const partTitleElement = screen.getByRole('heading', { name: 'Part - 1' });
    expect(partTitleElement).toBeInTheDocument();
  })
})