<script lang='ts'>
  import { Button } from '$lib/components/ui/button'
  import { ArrowLeftIcon } from '@lucide/svelte'

  type Props = {
    title: string
  }

  const { title }: Props = $props()
</script>

<div class='sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50'>
  <Button variant='ghost' size='sm'>
    <a href='/courses'>
      <ArrowLeftIcon class='size-5 stroke-2 text-neutral-400' />
    </a>
  </Button>
  <h1 class='font-bold text-lg'>
    {title}
  </h1>
  <div />
</div>
