import { Greet } from "./Greet";
import { render, screen } from "@testing-library/react";

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Guest JEST');
    expect(textElement).toBeInTheDocument();
  })
  describe('Greet - name', () => {
    test('render with the name', () => {
      const testName = 'DB';
      render(<Greet name={testName}/>);

      const textNameElement = screen.getByText('DB JEST');
      expect(textNameElement).toBeInTheDocument();
    })
  });
})