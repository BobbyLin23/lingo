import { eq } from 'drizzle-orm'

import db from '~/db/drizzle'
import { userProgress } from '~/db/schema'

export default defineEventHandler(async (event) => {
  const { auth } = event.context

  if (!auth.userId)
    return null

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, auth.userId),
    with: {
      activeCourse: true,
    },
  })

  return data
})
