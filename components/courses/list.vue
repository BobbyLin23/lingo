<script lang="ts" setup>
import { toast } from 'vue-sonner'

import Card from './card.vue'
import type { courses, userProgress } from '~/db/schema'

const props = defineProps<{
  courses: typeof courses.$inferSelect[]
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}>()

const router = useRouter()

const loading = ref(false)

async function onClick(id: number) {
  if (id === props.activeCourseId)
    return router.push('/learn')

  const { error } = await useFetch('/api/user-progress', {
    method: 'PUT',
    body: {
      courseId: id,
    },
  })

  if (error.value)
    toast.error('Something went wrong')
}
</script>

<template>
  <div class="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
    <Card
      v-for="course in props.courses"
      :id="course.id"
      :key="course.id"
      :title="course.title"
      :image-src="course.imageSrc"
      :disabled="loading"
      :active="course.id === activeCourseId"
      @click="onClick(course.id)"
    />
  </div>
</template>
