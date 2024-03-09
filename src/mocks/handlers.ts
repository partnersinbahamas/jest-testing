import { rest } from 'msw';
import usersMock from './users.json';

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(usersMock),
    );
  }),
];