<script lang="ts" setup>

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <MHeader />
    <main class="flex-1 flex flex-col items-center justify-center">
      <slot />
    </main>
    <MFooter />
  </div>
</template>
