import { Skills } from "./Skills";
import { skills } from "../../helpers/variables";
import { render,screen } from "@testing-library/react";

describe('Skills', () => {
  test('renders correctly', () => {
    render(<Skills skills={skills}/>);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });
  test('renders with items', () => {
    render(<Skills skills={skills}/>);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  })
})