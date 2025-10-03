<script lang='ts'>
  import Hero from '$lib/assets/hero.svg'
  import Button from '$lib/components/ui/button/button.svelte'
  import { LoaderIcon } from '@lucide/svelte'
  import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from 'svelte-clerk'
</script>

<div class='max-w-[988px] mx-auto flex-1 flex flex-col lg:flex-row p-4 gap-2 items-center justify-center'>
  <div class='relative mb-8 lg:mb-0 size-[240px] lg:size-[424px]'>
    <img src={Hero} alt='Hero'>
  </div>
  <div class='flex flex-col items-center gap-y-8'>
    <p class='font-bold text-xl lg:text-3xl text-neutral-600 max-w-[480px] text-center'>
      Learn, practice and master a new language in Lingo
    </p>
    <div class='flex flex-col items-center gap-3 max-w-[330px] w-full'>
      <ClerkLoading>
        <LoaderIcon class='size-5 text-muted-foreground animate-spin' />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <Button variant='primary'>
            <a href='/learn'>
              Get Started
            </a>
          </Button>
        </SignedIn>
        <SignedOut>
          <SignUpButton mode='modal'>
            <Button size='lg' variant='secondary' class='w-full'>
              Get Started
            </Button>
          </SignUpButton>
          <SignInButton mode='modal'>
            <Button size='lg' variant='primaryOutline' class='w-full'>
              I already have an account
            </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </div>
  </div>
</div>
