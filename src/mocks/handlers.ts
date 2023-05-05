import { rest } from "msw";

export const handlers = [
  rest.get("/api/airports", (_, res, ctx) => {
    return res(ctx.json([]));
  }),
];
