import { eq } from 'drizzle-orm'
import db from '~/db/drizzle'
import { courses } from '~/db/schema'

export default defineEventHandler(async (event) => {
  const id = Number.parseInt(event.context.params?.id as string) as number

  if (!id)
    return null

  const data = await db.query.courses.findFirst({
    where: eq(courses.id, id),

  })

  return data
})
