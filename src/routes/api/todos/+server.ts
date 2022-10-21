import { json, type RequestHandler } from "@sveltejs/kit";

// Local database
let todos: Todo[] = [];

export const GET: RequestHandler = async () => {
  return json({ todos });
};

export const POST: RequestHandler = async ({ request }) => {
  const data = await request.json();
  todos.push(data);

  return json({
    status: 'ok'
  });
};
