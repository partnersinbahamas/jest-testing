import { Greet } from "./Greet"
import { render, screen } from "@testing-library/react"

test('Greet renders corrected', () => {
  render(<Greet />);
  const textElement = screen.getByText('JEST');
  expect(textElement).toBeInTheDocument();
});

test('Greet with the props name', () => {
  render(<Greet name="Denys Bokov"/>)
  const textElement = screen.getByText('Denys Bokov JEST')
  expect(textElement).toBeInTheDocument();
})