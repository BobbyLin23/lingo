import db from '~/db/drizzle'

export default defineEventHandler(async () => {
  const courses = await db.query.courses.findMany()

  return courses
})
