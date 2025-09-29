<script lang='ts'>
  import mascot from '$lib/assets/mascot.svg'
  import { LoaderIcon } from '@lucide/svelte'
  import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from 'svelte-clerk'
  import Button from '../ui/button/button.svelte'
</script>

<header class='h-20 w-full border-b-2 border-slate-200 px-4'>
  <div class='lg:max-w-screen-lg mx-auto flex items-center justify-between h-full'>
    <div class='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
      <img src={mascot} alt='Logo' height='40' width='40' />
      <h1 class='text-2xl font-extrabold text-green-600 tracking-wide'>
        Lingo
      </h1>
    </div>
    <ClerkLoading>
      <LoaderIcon class='size-5 text-muted-foreground animate-spin' />
    </ClerkLoading>
    <ClerkLoaded>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button size='lg' variant='ghost'>
            Login
          </Button>
        </SignInButton>
      </SignedOut>
    </ClerkLoaded>
  </div>
</header>
