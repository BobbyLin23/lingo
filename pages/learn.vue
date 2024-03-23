<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'main',
})
</script>

<template>
  <div class="flex flex-row-reverse gap-12 px-6">
    <StickyWrapper>
      <UserProgress
        :active-course="{
          title: 'Spanish',
          imageSrc: '/es.svg',
        }"
        :hearts="5" :points="100"
        :has-active-subscription="false"
      />
    </StickyWrapper>
    <FeedWrapper>
      <LHeader title="Spanish" />
      <div class="space-y-4">
        123
      </div>
    </FeedWrapper>
  </div>
</template>
