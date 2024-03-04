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

    const labelElement = screen.getByText('Job location'); // using for span, div, p - with default
    expect(labelElement).toBeInTheDocument();

    const labelElement2 = screen.getByText(/Job location/); // using for span, div, p - with regex
    expect(labelElement2).toBeInTheDocument();

    const labelElement3 = screen.getByText(/job location/i); // using for span, div, p - with regex + ignore case
    expect(labelElement3).toBeInTheDocument();

    const labelElement4 = screen.getByText((content) => content.startsWith('Job')); // using for span, div, p - with regex + ignore case
    expect(labelElement4).toBeInTheDocument();

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