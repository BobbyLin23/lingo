<script lang='ts'>
  import Footer from '$lib/components/marketing/footer.svelte'
  import Header from '$lib/components/marketing/header.svelte'

  const { children } = $props()
</script>

<div class='min-h-screen flex flex-col'>
  <Header />
  <main class='flex-1 flex flex-col items-center justify-center'>
    {@render children?.()}
  </main>
  <Footer />
</div>
