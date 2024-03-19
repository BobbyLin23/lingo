<script lang="ts" setup>

</script>

<template>
  <MobileHeader />
  <TheSidebar class="hidden lg:flex" />
  <main class="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
    <div class="h-full">
      <slot />
    </div>
  </main>
</template>
