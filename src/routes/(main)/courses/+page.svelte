<script lang='ts'>
  import type { PageProps } from './$types'
  import List from '$lib/components/course/list.svelte'

  const { data }: PageProps = $props()
</script>

<div class='h-full max-w-[912px] px-3 mx-auto'>
  <h1 class='text-2xl font-bold text-neutral-700'>
    Language Courses
  </h1>
  <List courses={data.courses} activeCourseId={1} />
</div>
