import { render, screen } from "@testing-library/react"
import { Form } from "./Form";

describe.only('Form', () => {
  test('TextInput - renders correctly', () => {
    render(<Form />);

    const nameElement = screen.getByPlaceholderText('Please enter your name...');
    expect(nameElement).toBeInTheDocument();

    const surName = screen.getByRole('textbox', { name: 'Surname' });
    expect(surName).toBeInTheDocument();
  });

  test('SelectInput - renders correctly', () => {
    render(<Form />);

    const labelElement = screen.getByText('Job location');
    expect(labelElement).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
  });

  test('Tersm - renders correctly', () => {
    render(<Form />);

    const labelTermsElement = screen.getByLabelText('I agree to the terms and conditions',
      { selector: 'input' },
    );
    expect(labelTermsElement).toBeInTheDocument();
  })

  test('SubmitButton - renders correctly', () => {
    render(<Form />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
})