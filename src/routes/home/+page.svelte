<script>
  import Todo from "../../lib/todo.svelte";
</script>

<svelte:head>
  <title>Todoy | Home</title>
</svelte:head>

<div
  class="w-[36rem] h-screen mx-auto flex flex-col justify-center items-center gap-8"
>
  <form class="w-full text-center flex flex-col items-center gap-8">
    <h1 class="font-bold text-4xl">Todos</h1>
    <input
      type="text"
      name="todo"
      id="todo"
      placeholder="+ tap to add a todo"
      class="w-full text-xl focus:outline-none border-0 bg-transparent placeholder:text-center py-2 px-4 focus:border-0 focus:border-b-2"
    />
  </form>
  <Todo />
</div>
