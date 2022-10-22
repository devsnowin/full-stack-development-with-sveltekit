import { json } from "@sveltejs/kit";
import { prisma } from "$lib/prisma";

// const prisma = new PrismaClient()

export const api = async (request: Request, data?: Todo, id?: string) => {
  let body = {};
  let status = 500;

  switch (request.method.toUpperCase()) {
    case "GET":
      status = 200;
      body = await prisma.todo.findMany();
      break;

    case "POST":
      status = 200;
      body = await prisma.todo.create({
        data: {
          completed: data?.completed as boolean,
          text: data?.text as string,
        },
      });
      break;

    case "DELETE":
      status = 200;
      body = await prisma.todo.delete({
        where: {
          id,
        },
      });
      break;

    case "PATCH":
      body = await prisma.todo.update({
        where: {
          id,
        },
        data: {
          text: data?.text,
          completed: data?.completed,
        },
      });
      status = 200;
      break;

    default:
      break;
  }

  return json({ status, todos: body });
};
