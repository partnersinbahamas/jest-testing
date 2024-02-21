import { render, screen } from "@testing-library/react"
import { Form } from "./Form";

describe('Form', () => {
  test('TextInput - renders correctly', () => {
    render(<Form />);

    const nameElement = screen.getByPlaceholderText('Please enter your name...');
    expect(nameElement).toBeInTheDocument();

    const surName = screen.getByRole('textbox', { name: 'Surname' });
    expect(surName).toBeInTheDocument();
  });

  test('SelectInput - renders correctly', () => {
    render(<Form />);

    const labelElement = screen.getByText('Job location'); // using for span, div, p
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

  test('Textarea - renders correctly', () => {
    render(<Form />);

    const textareaElement = screen.getByDisplayValue('Textarea value');
    expect(textareaElement).toBeInTheDocument();
  })

  test('SubmitButton - renders correctly', () => {
    render(<Form />);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('Image - renders correctly', () => {
    render(<Form />);

    const imageElement = screen.getByAltText('image');
    expect(imageElement).toBeInTheDocument();
  })
})