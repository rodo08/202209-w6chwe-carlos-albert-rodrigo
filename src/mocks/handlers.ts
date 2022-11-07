import { rest } from "msw";

const { REACT_APP_URL: apiUrl } = process.env;

export const handlers = [
  // Handles a POST /login request
  rest.get(`${apiUrl}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({}));
  }),
];
