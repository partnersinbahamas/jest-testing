import { render, screen } from "@testing-library/react";
import { Truthy } from "./Truthy";
import userEvent from "@testing-library/user-event";

describe('Truthy component', () => {
  const user = userEvent.setup();

  it('renders correctly', async () => {
    const handleFalse = jest.fn();
    const handleTrue = jest.fn();

    render(
      <Truthy
        truthy={false}
        handleFalse={handleFalse}
        handleTrue={handleTrue}
      />
    );

    const truthyElement = screen.getByTestId('truthy');
    expect(truthyElement).toBeInTheDocument();
    expect(truthyElement).toHaveTextContent('is false');

    const trueButtonElement = screen.getByRole('button', { name: 'True' });
    expect(trueButtonElement).toBeInTheDocument();
    await user.click(trueButtonElement);
    expect(handleTrue).toHaveBeenCalled();

    const falseButtonElement = screen.getByRole('button', { name: 'False' });
    expect(falseButtonElement).toBeInTheDocument();
    await user.click(falseButtonElement);
    expect(handleFalse).toHaveBeenCalled();
  });
});