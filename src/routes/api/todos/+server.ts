import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const GET: RequestHandler = async ({ request }) => {
  return api(request);
};

export const POST: RequestHandler = async ({ request }) => {
  const data: Todo = await request.json();

  return api(request, data);
};
