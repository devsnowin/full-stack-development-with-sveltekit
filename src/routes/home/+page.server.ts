import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const data = await fetch("/api/todos");
  if(data.ok){
    const jsonData = await data.json();
    return { jsonData };
  }

  throw error(404, "No items found!")
};
