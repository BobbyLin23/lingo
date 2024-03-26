import { eq } from 'drizzle-orm'

import db from './drizzle'
import { courses, userProgress } from './schema'

export async function getCourseById(courseId: number) {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
  })

  return data
}
