import { render, screen } from "@testing-library/react";
import { Login } from "./Login";

describe('Login', () => {
  it('renders with Log-in', () => {
    render(<Login />);

    const logInButtonElement = screen.getByRole('button', {name: 'Log-in'});
    expect(logInButtonElement).toBeInTheDocument();
  });
  it('renders with Log-out', () => {
    render(<Login />);

    const logOutButtonElement = screen.queryByRole('button', {name: 'Log-out'});
    expect(logOutButtonElement).not.toBeInTheDocument();
  });
  it('renders with async timeout', async() => {
    render(<Login />);

    const buttonElement = await screen.findByRole(
      'button',
      { name: 'Log-out' },
      { timeout: 2000 }
    ) // till 1000ms, there is exist for that timeout option in ms;
    expect(buttonElement).toBeInTheDocument();
  })
})