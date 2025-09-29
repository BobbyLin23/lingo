<script lang='ts'>
  import type { Snippet } from 'svelte'
  import favicon from '$lib/assets/favicon.svg'
  import { ClerkProvider } from 'svelte-clerk'
  import '../app.css'

  const { children }: { children: Snippet } = $props()
</script>

<svelte:head>
  <link rel='icon' href={favicon} />
</svelte:head>

<ClerkProvider afterSignOutUrl='/' afterSignInUrl='/learn' afterSignUpUrl='/learn'>
  {@render children?.()}
</ClerkProvider>
