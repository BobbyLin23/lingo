<script lang='ts'>
  import MobileHeader from '$lib/components/main/mobile-header.svelte'
  import Sidebar from '$lib/components/main/sidebar.svelte'

  const { children } = $props()
</script>

<MobileHeader />
<Sidebar class='hidden lg:flex' />
<main class='lg:pl-64 h-full pt-[50px] lg:pt-0'>
  <div class='h-full max-w-5xl mx-auto pt-6'>
    {@render children()}
  </div>
</main>
