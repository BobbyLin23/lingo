import { eq } from 'drizzle-orm'
import db from '~/db/drizzle'
import { getCourseById } from '~/db/queries'
import { userProgress } from '~/db/schema'

export default defineEventHandler(async (event) => {
  const { userId, user } = event.context.auth

  const body = await readBody(event)

  const { courseId } = body

  if (!courseId)
    throw new Error('Course ID is required')

  if (!userId || !user)
    throw new Error('Unauthorized')

  const course = await getCourseById(courseId)

  if (!course)
    throw new Error('Course not found')

  const existingUserProgress = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
      activeCourse: true,
    },
  })

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userImageSrc: user.imageUrl || '/mascot.svg',
    })

    await sendRedirect(event, '/learn', 302)
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userImageSrc: user.imageUrl || '/mascot.svg',
  })

  await sendRedirect(event, '/learn', 302)
})
