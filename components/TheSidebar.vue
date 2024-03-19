<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'
import { cn } from '~/lib/utils'

defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn('h-full lg:w-[256px] lg:fixed left-0 top-0 border-r-2 px-4 flex flex-col', $props.class)"
  >
    Sidebar
  </div>
</template>
