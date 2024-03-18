<script lang="ts" setup>
import { Loader } from 'lucide-vue-next'
import { ClerkLoaded, ClerkLoading, SignInButton, SignUpButton, SignedIn, SignedOut } from 'vue-clerk'

definePageMeta({
  layout: 'marketing',
  middleware: ['public'],
})
</script>

<template>
  <div class="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
    <div class="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
      <NuxtImg src="/hero.svg" alt="Hero" />
    </div>
    <div class="flex flex-col items-center gap-y-8">
      <h1 class="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[400px] text-center">
        Learn, pratice, and master new languages with Lingo.
      </h1>
      <div class="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader class="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal" after-sign-in-url="/learn" after-sign-up-url="/learn">
              <Button size="lg" variant="secondary" class="w-full">
                Get Started
              </Button>
            </SignUpButton>
            <SignInButton mode="modal" after-sign-in-url="/learn" after-sign-up-url="/learn">
              <Button size="lg" variant="primaryOutline" class="w-full">
                I already have an account
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" class="w-full" as-child>
              <NuxtLink href="/learn">
                Continue Learning
              </NuxtLink>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
    </div>
  </div>
</template>
