import type { PageServerLoad } from './$types'
import { db } from '$lib/server/db'
import { courses } from '$lib/server/db/schema'

export const load: PageServerLoad = async () => {
  return {
    courses: await db.select().from(courses),
  }
}
