import { render, screen, waitFor } from "@testing-library/react";
import usersMock from '../../mocks/users.json';
import { Users } from "./Users";

describe('users', () => {
  it('renders correctly', async () => {
    render(<Users />);

    const headingElement = screen.getByRole('heading', { name: 'Users' });
    expect(headingElement).toBeInTheDocument();

    const listElement = screen.queryByRole('list');
    expect(listElement).toBeInTheDocument();

    const usersElements = await screen.findAllByRole('listitem');
    expect(usersElements).toHaveLength(usersMock.length);
  })
})