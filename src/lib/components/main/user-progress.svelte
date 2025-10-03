<script lang='ts'>
  import heart from '$lib/assets/heart.svg'
  import point from '$lib/assets/points.svg'
  import { Button } from '$lib/components/ui/button'
  import { InfinityIcon } from '@lucide/svelte'

  type Props = {
    activeCourse: {
      imageSrc: string
      title: string
    }
    hearts: number
    points: number
    hasActiveSubscription: boolean
  }

  const { activeCourse, hearts, points, hasActiveSubscription }: Props = $props()
</script>

<div class='flex items-center justify-between gap-x-2 w-full'>
  <Button variant='ghost'>
    <a href='/courses'>
      <img src={activeCourse.imageSrc} alt={activeCourse.title} class='rounded-md border' width={32} height={32} />
    </a>
  </Button>
  <Button variant='ghost' class='text-orange-500'>
    <a href='/shop'>
      <img src={point} height={28} width={28} alt='Points' class='mr-2'>
      {points}
    </a>
  </Button>
  <Button variant='ghost' class='text-rose-500'>
    <a href='/shop'>
      <img src={heart} height={22} width={22} alt='Points' class='mr-2'>
      {#if (hasActiveSubscription)}
        <InfinityIcon class='size-4 stroke-3' />
      {:else}
        hearts
      {/if}
    </a>
  </Button>
</div>
