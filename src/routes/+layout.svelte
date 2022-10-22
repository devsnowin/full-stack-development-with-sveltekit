<script>
  import Header from "../components/header.svelte";
  import "../app.css";
</script>

<div class="px-8">
  <Header />
  <main class="-mt-[5rem]">
    <slot />
  </main>
</div>
