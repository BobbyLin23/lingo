<script lang='ts' module>
  import mascot from '$lib/assets/mascot.svg'

  export type SidebarProps = {
    class?: string
  }
</script>

<script lang='ts'>
  import leaderboard from '$lib/assets/leaderboard.svg'
  import learn from '$lib/assets/learn.svg'
  import quests from '$lib/assets/quests.svg'
  import shop from '$lib/assets/shop.svg'
  import { cn } from '$lib/utils'
  import { Loader } from '@lucide/svelte'
  import { ClerkLoaded, ClerkLoading, UserButton } from 'svelte-clerk'
  import SidebarItem from './sidebar-item.svelte'

  const { class: className }: SidebarProps = $props()
</script>

<div class={cn('lg:w-64 h-full lg:fixed flex flex-col left-0 top-0 px-4 border-r-2', className)}>
  <a href='/learn'>
    <div class='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
      <img src={mascot} alt='Mascot' height='40' width='40' />
      <h1 class='text-2xl font-extrabold text-green-600 tracking-wide'>
        Lingo
      </h1>
    </div>
  </a>
  <div class='flex flex-col gap-y-2 flex-1'>
    <SidebarItem label='Learn' href='/learn' iconSrc={learn} />
    <SidebarItem label='Leaderboard' href='/leaderboard' iconSrc={leaderboard} />
    <SidebarItem label='quests' href='/quests' iconSrc={quests} />
    <SidebarItem label='shop' href='/shop' iconSrc={shop} />
  </div>
  <div class='p-4'>
    <ClerkLoading>
      <Loader class='size-5 text-muted-foreground animate-spin' />
    </ClerkLoading>
    <ClerkLoaded>
      <UserButton />
    </ClerkLoaded>
  </div>
</div>
