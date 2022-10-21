<script>
  import Delete from "svelte-material-icons/Delete.svelte";
</script>

<div
  class="w-full flex justify-between items-center  bg-neutral px-8 h-16 rounded-xl"
>
  <div class="flex items-center gap-4">
    <input type="checkbox" aria-label="Mark done/not done" checked={true} class="checkbox checkbox-secondary" />
    <p class="font-poppins">Prepare slides for presentation</p>
  </div>

  <button class="">
    <Delete size={22} color="#fb6f84" />
  </button>
</div>
