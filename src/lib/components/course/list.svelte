<script lang='ts'>
  import Card from '$lib/components/course/card.svelte'
  import { courses as courseSchema } from '$lib/server/db/schema'

  type Props = {
    courses: typeof courseSchema.$inferSelect[]
    activeCourseId?: number
  }

  const { courses, activeCourseId }: Props = $props()

  const onClick = (id: number) => {
    // eslint-disable-next-line no-console
    console.log(id)
  }
</script>

<div class='pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4'>
  {#each courses as course}
    <Card
      id={course.id}
      title={course.title}
      imageSrc={course.imageSrc}
      disabled={false}
      active={course.id === activeCourseId}
      onClick={onClick}
    />
  {/each}
</div>
