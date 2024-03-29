// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 4021,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  build: {
    transpile: ['vue-clerk', '@clerk/clerk-js'],
  },
  components: [
    '~/components',
    { path: '~/components/marketing', prefix: 'M' },
    { path: '~/components/learn', prefix: 'L' },
    { path: '~/components/courses', prefix: 'C' },
  ],
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
    clerkSecretKey: process.env.CLERK_SECRET_KEY,
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
  googleFonts: {
    families: {
      Nunito: true,
    },
  },
})
