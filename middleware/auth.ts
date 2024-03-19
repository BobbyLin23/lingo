import { useClerk } from 'vue-clerk'

export default defineNuxtRouteMiddleware(() => {
  const clerk = useClerk()

  if (process.server)
    return

  if (process.client && clerk.loaded && !clerk.user?.id)
    return navigateTo('/404')
})
