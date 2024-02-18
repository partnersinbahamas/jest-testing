import { render, screen } from "@testing-library/react"
import { Form } from "./Form";

describe('Form', () => {
  test('TextInput - renders correctly', () => {
    render(<Form />);

    const labelElement = screen.getByText('Name');
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('SelectInput - renders correctly', () => {
    render(<Form />);

    const labelElement = screen.getByText('Job location');
    expect(labelElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  test('SubmitButton - renders correctly', () => {
    render(<Form />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
})