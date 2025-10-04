<script lang='ts'>
  import { cn } from '$lib/utils'
  import { CheckIcon } from '@lucide/svelte'

  type Props = {
    title: string
    id: number
    imageSrc: string
    disabled?: boolean
    active?: boolean
    onClick: (id: number) => void
  }

  const { disabled, active, title, id, imageSrc, onClick }: Props = $props()
</script>

<button
  onclick={() => onClick(id)}
  class={cn(
    'h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]',
    disabled && 'pointer-events-none opacity-50',
  )}>
  <div class='min-[24px] w-full flex items-center justify-end'>
    {#if active}
      <div class='rounded-md bg-green-600 flex items-center justify-center p-1.5'>
        <CheckIcon class='size-4 stroke-[4] text-white' />
      </div>
    {/if}
    <img src={imageSrc} alt={title} height='70' width='93.33' class='rounded-lg drop-shadow-md border object-cover' />
    <p class='text-neutral-700 text-center font-bold mt-3'>
      {title}
    </p>
  </div>
</button>
