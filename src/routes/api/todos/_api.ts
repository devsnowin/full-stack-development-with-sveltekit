import { json } from "@sveltejs/kit";

// Local database
let todos: Todo[] = [];

export const api = (request: Request, data?: Todo, id?: Number) => {
  let body = {};
  let status = 500;

  switch (request.method.toUpperCase()) {
    case "GET":
      status = 200;
      body = todos;
      break;

    case "POST":
      todos.push(data as Todo);
      status = 200;
      body = data!;
      break;

    case "DELETE":
      todos = todos.filter((todo) => todo.id !== id);
      status = 200;
      body = todos;
      break;
    
    case "PATCH":
      todos = todos.map(todo => {
        if(todo.id === id && data !== undefined){
          todo.text = data.text as string;
          todo.completed = data.completed as boolean
        }
        return todo;
      })
      status = 200
      break;

    default:
      break;
  }

  return json({ status, todos: body });
};
