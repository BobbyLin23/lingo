<script>
  import es from '$lib/assets/es.svg'
  import fr from '$lib/assets/fr.svg'
  import hr from '$lib/assets/hr.svg'
  import it from '$lib/assets/it.svg'
  import jp from '$lib/assets/jp.svg'
  import { Button } from '$lib/components/ui/button/index.js'
</script>

<footer class='hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2'>
  <div class='max-w-screen-lg mx-auto flex items-center justify-evenly h-full'>
    <Button size='lg' variant='ghost'>
      <img src={hr} alt='Croatia' height='32' width='40' class='mr-4 rounded-full'>
      Croatia
    </Button>
    <Button size='lg' variant='ghost'>
      <img src={es} alt='Spain' height='32' width='40' class='mr-4 rounded-full'>
      Spain
    </Button>
    <Button size='lg' variant='ghost'>
      <img src={fr} alt='French' height='32' width='40' class='mr-4 rounded-full'>
      French
    </Button>
    <Button size='lg' variant='ghost'>
      <img src={it} alt='Italian' height='32' width='40' class='mr-4 rounded-full'>
      Italian
    </Button>
    <Button size='lg' variant='ghost'>
      <img src={jp} alt='Japanese' height='32' width='40' class='mr-4 rounded-full'>
      Japanese
    </Button>
  </div>
</footer>
