// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    "@nuxt/image"
  ],
  build: {
    transpile: ['vue-clerk']
  },
  components: [
    '~/components',
    { path: '~/components/marketing', prefix: 'M' }
  ],
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY
    }
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  googleFonts: {
    families: {
      Nunito: true
    }
  },
})
