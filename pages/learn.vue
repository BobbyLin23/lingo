<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'main',
})

const userProgressData = getUserProgress()

const [userProgress] = await Promise.all([userProgressData])

if (!userProgress.value || !userProgress.value?.activeCourse)
  navigateTo('/courses')
</script>

<template>
  <div class="flex flex-row-reverse gap-12 px-6">
    <StickyWrapper>
      <UserProgress
        :active-course="{
          title: 'Spanish',
          imageSrc: '/es.svg',
        }"
        :hearts="5"
        :points="100"
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
