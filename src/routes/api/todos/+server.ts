import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

// Local database
let todos: Todo[] = [];

export const GET: RequestHandler = async ({ request }) => {
  return api(request);
};

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  // todos.push(data);

  // return json({
  //   status: "ok",
  // });

  return api(request, data);
};
