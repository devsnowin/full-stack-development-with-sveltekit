<script lang="ts">
  import Delete from "svelte-material-icons/Delete.svelte";

  export let todo: Todo;

  const deleteTodo = async () => {
    await fetch(`/api/todos/${todo.id}`, {
      method: "DELETE",
    })
      .then(async (res) => {
        console.log(await res.json());
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const updateTodo = async () => {
    await fetch(`api/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: todo.text,
        completed: !todo.completed,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then(async (res) => {
        console.log(await res.json())
        location.reload()
      })
      .catch((err) => console.log(err));
  };
</script>

<div
  class="w-full flex justify-between items-center  bg-neutral px-8 h-16 rounded-xl"
>
  <div class="flex items-center gap-4">
    <input
      type="checkbox"
      aria-label="Mark done/not done"
      checked={todo.completed}
      class="checkbox checkbox-secondary"
      on:click={updateTodo}
    />
    <p class="font-poppins">{todo.text}</p>
  </div>

  <button class="" on:click={deleteTodo}>
    <Delete size={22} color="#fb6f84" />
  </button>
</div>
