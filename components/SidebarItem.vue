<script lang="ts" setup>
const props = defineProps<{
  label: string
  iconSrc: string
  href: string
}>()

const route = useRoute()

const active = computed(() => route.path === props.href)
</script>

<template>
  <Button
    :variant="active ? 'sidebarOutline' : 'sidebar'"
    class="justify-start h-[52px]"
    as-child
  >
    <NuxtLink :href="href">
      <NuxtImg :src="iconSrc" class="mr-5" height="32" width="32" alt="Icon" />
      {{ label }}
    </NuxtLink>
  </Button>
</template>
