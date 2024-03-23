<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { ClerkLoaded, ClerkLoading, UserButton } from 'vue-clerk'
import { Loader } from 'lucide-vue-next'

import { cn } from '~/lib/utils'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('h-full lg:w-[256px] lg:fixed left-0 top-0 border-r-2 px-4 flex flex-col', $props.class)"
  >
    <NuxtLink href="/learn">
      <div class="pt-8 pl-4 pb-7 flex items-center gap-x-3">
        <NuxtImg src="/mascot.svg" height="40" width="40" alt="Mascot" />
        <h1 class="text-2xl font-extrabold text-gray-600 tracking-wide">
          Lingo
        </h1>
      </div>
    </NuxtLink>
    <div class="flex flex-col flex-1 gap-y-2">
      <SidebarItem label="Learn" href="/learn" icon-src="/learn.svg" />
      <SidebarItem label="Leaderboard" href="/leaderboard" icon-src="/leaderboard.svg" />
      <SidebarItem label="Quests" href="/quests" icon-src="/quests.svg" />
      <SidebarItem label="Shop" href="/shop" icon-src="/shop.svg" />
    </div>
    <div class="p-4">
      <ClerkLoading>
        <Loader class="w-5 h-5 animate-spin text-muted-foreground" />
      </ClerkLoading>
      <ClerkLoaded>
        <UserButton after-sign-out-url="/" />
      </ClerkLoaded>
    </div>
  </div>
</template>
