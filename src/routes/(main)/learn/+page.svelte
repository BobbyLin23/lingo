<script lang='ts'>
  import es from '$lib/assets/es.svg'
  import FeedWrapper from '$lib/components/main/feed-wrapper.svelte'
  import Header from '$lib/components/main/header.svelte'
  import StickyWrapper from '$lib/components/main/sticky-wrapper.svelte'
  import UserProgress from '$lib/components/main/user-progress.svelte'
</script>

<div class='flex flex-row-reverse gap-12 px-6'>
  <StickyWrapper>
    <UserProgress
      activeCourse={{
        title: 'Spanish',
        imageSrc: es,
      }}
      hearts={5}
      points={100}
      hasActiveSubscription={false}
    />
  </StickyWrapper>
  <FeedWrapper>
    <Header title='Spanish' />
    <div class='space-y-4'>
      123
    </div>
  </FeedWrapper>
</div>
