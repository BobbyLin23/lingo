<script lang='ts'>
  import * as Sheet from '$lib/components/ui/sheet'
  import { MenuIcon } from '@lucide/svelte'
  import Sidebar from './sidebar.svelte'
</script>

<Sheet.Root>
  <Sheet.Trigger>
    <MenuIcon class='text-white' />
  </Sheet.Trigger>
  <Sheet.Content class='p-0 z-[100]' side='left'>
    <Sidebar />
  </Sheet.Content>
</Sheet.Root>
