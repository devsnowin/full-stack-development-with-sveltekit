import type { RequestHandler } from "@sveltejs/kit";
import { api } from "../_api";

export const DELETE: RequestHandler = ({ request, params }) => {
  const id: string = params.id!;
  return api(request, undefined, id);
};

export const PATCH: RequestHandler = async ({request, params}) => {
  const id: string = params.id!;
  const data: Todo = await request.json()  
  
  return api(request, data, id)
  // return json({data})
}
