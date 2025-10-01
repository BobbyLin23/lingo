<script lang='ts'>
  import { page } from '$app/state'
  import { Button } from '$lib/components/ui/button/index.js'

  type SidebarProps = {
    label: string
    iconSrc: string
    href: string
  }

  const { label, href, iconSrc }: SidebarProps = $props()
  const active = $derived(href === page.url.pathname)
</script>

<a href={href} class='w-full'>
  <Button variant={active ? 'secondaryOutline' : 'sidebar'} class='justify-start h-[52px] w-full cursor-pointer'>
    <img src={iconSrc} alt={label} class='mr-5' height='32' width='32'>
    {label}
  </Button>
</a>
