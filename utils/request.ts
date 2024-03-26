import type { courses, userProgress } from '~/db/schema'

export async function getUserProgress() {
  const { data } = await useFetch<typeof userProgress.$inferSelect & {
    activeCourse: typeof courses.$inferSelect
  }>('/api/userProgress', {
    method: 'GET',
  })

  return data
}
