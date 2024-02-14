import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test('greet jest implementation testing', () => {
  render(<Greet />);
  const jestElement = screen.getByText('Jest - simple test');
  expect(jestElement).toBeInTheDocument();
});