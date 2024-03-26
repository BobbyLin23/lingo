<script lang="ts" setup>
import type { courses, userProgress } from '~/db/schema'

definePageMeta({
  layout: 'main',
})

const { data: coursesData } = await useFetch<typeof courses.$inferSelect[]>('/api/courses')
const { data: userProgressData } = await useFetch<typeof userProgress.$inferSelect>('/api/userProgress')

const [coursesRes, userProgressRes] = await Promise.all([coursesData, userProgressData])
</script>

<template>
  <div class="h-full min-w-[912px] mx-auto px-3">
    <h1 class="text-2xl font-bold text-neutral-700">
      Language Courses
    </h1>
    <CList :courses="coursesRes!" :active-course-id="userProgressRes?.activeCourseId" />
  </div>
</template>
