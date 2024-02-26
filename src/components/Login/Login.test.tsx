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
})