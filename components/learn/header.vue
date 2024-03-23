<script lang="ts" setup>
import { ArrowLeft } from 'lucide-vue-next'

defineProps<{
  title: string
}>()
</script>

<template>
  <div
    class="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between mb-5 border-b-2
    text-neutral-400 lg:z-50"
  >
    <NuxtLink href="/courses">
      <Button variant="ghost" size="sm">
        <ArrowLeft class="h-5 w-5 stroke-2 text-neutral-400" />
      </Button>
    </NuxtLink>
    <h1 class="text-lg font-bold">
      {{ title }}
    </h1>
    <div />
  </div>
</template>
