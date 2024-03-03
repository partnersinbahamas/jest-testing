
import { render, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";


describe('MuiMode', () => {
  it('renders corectly with mode', () => {
    render(<MuiMode />);

    const textElement = screen.getByRole('heading');
    expect(textElement).toHaveTextContent('light mode');
  });
});