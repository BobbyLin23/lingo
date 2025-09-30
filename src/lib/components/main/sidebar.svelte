<script lang='ts' module>

  export type SidebarProps = {
    class?: string
  }
</script>

<script lang='ts'>
  import { cn } from '$lib/utils'

  const { class: className }: SidebarProps = $props()
</script>

<div class={cn('lg:w-64 h-full lg:fixed bg-blue-400 flex flex-col left-0 top-0 border-r-2', className)}>
  Sidebar
</div>
