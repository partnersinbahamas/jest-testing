import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from '@testing-library/user-event';

describe('Counter' , () => {
  const user = userEvent.setup();

  test('renders correclty', () => {
    render(<Counter />);

    const decrementButtonElement = screen.getByRole('button', { name: 'Decrement' });
    expect(decrementButtonElement).toBeInTheDocument();

    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toBeInTheDocument();
    
    const incrementButtonElement = screen.getByRole('button', { name: 'Increment' });
    expect(incrementButtonElement).toBeInTheDocument();
  });
  test('renders with default state: 0', () => {
    render(<Counter />);

    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('0');
  });
  it('render with user increment interaction', async() => {
    render(<Counter />);

    const counterElement = screen.getByTestId('counter');
    const incrementButtonElement = screen.getByRole('button', { name: 'Increment' });

    await user.click(incrementButtonElement);
    expect(counterElement).toHaveTextContent('1');
  });
  it('renders with user decrement interaction', async () => {
    render(<Counter />);

    const counterElement = screen.getByTestId('counter');
    const decrementButtonElement = screen.getByRole('button', { name: 'Decrement' });

    await user.click(decrementButtonElement);
    expect(counterElement).toHaveTextContent('-1');
  });
  it('renders with set input', async() => {
    const typedValue = '10';

    render(<Counter />);

    const inputElement = screen.getByRole('textbox', {name: 'Set amount'});
    await user.type(inputElement, typedValue);
    expect(inputElement).toHaveValue(typedValue);

    const setButtonElement = screen.getByRole('button', { name: 'Set' });
    await user.click(setButtonElement);

    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(typedValue);
    expect(inputElement).toHaveValue('');
  });
  it('render with keyboard => tab', async() => {
    render(<Counter />);

    const decrementButtonElement = screen.getByRole('button', { name: 'Decrement' });
    const incrementButtonElement = screen.getByRole('button', { name: 'Increment' });
    const inputElement = screen.getByRole('textbox', {name: 'Set amount'});
    const setButtonElement = screen.getByRole('button', { name: 'Set' });

    expect(decrementButtonElement).not.toHaveFocus();
    expect(incrementButtonElement).not.toHaveFocus();
    expect(inputElement).not.toHaveFocus();
    expect(setButtonElement).not.toHaveFocus();

    await user.tab();
    expect(decrementButtonElement).toHaveFocus();

    await user.tab();
    expect(decrementButtonElement).not.toHaveFocus();
    expect(incrementButtonElement).toHaveFocus();

    await user.tab();
    expect(incrementButtonElement).not.toHaveFocus();
    expect(inputElement).toHaveFocus();

    await user.tab();
    expect(inputElement).not.toHaveFocus();
    expect(setButtonElement).toHaveFocus();
  });
})