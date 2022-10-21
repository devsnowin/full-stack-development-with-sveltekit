<script lang="ts">
  import type { PageData } from "./$types";
  import TodoComponent from "../../lib/todo.svelte";

  export let data: PageData;
  let todos: Todo[] = data.jsonData.todos;
  let todo = "";

  async function handleSubmit() {
    const todoData = {
      text: todo,
      completed: false,
    };

    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(async (res) => {
        console.log(await res.json());
      })
      .catch((err) => console.log(err));
  }
</script>

<svelte:head>
  <title>Todoy | Home</title>
</svelte:head>

<div
  class="w-[36rem] h-screen mx-auto flex flex-col justify-center items-center gap-8"
>
  <form
    class="w-full text-center flex flex-col items-center gap-8"
    on:submit={handleSubmit}
  >
    <h1 class="font-bold text-4xl">Todos</h1>
    <input
      type="text"
      name="todo"
      id="todo"
      bind:value={todo}
      placeholder="+ tap to add a todo"
      class="w-full text-xl focus:outline-none border-0 bg-transparent placeholder:text-center py-2 px-4 focus:border-0 focus:border-b-2"
    />
  </form>
  {#if todos}
    {#each todos as todo}
      <TodoComponent {todo} />
    {/each}
  {/if}
</div>
