<script lang="ts">
  import type { TodoFilter } from '$lib/types'

  const FILTERS = ['all', 'todo', 'done'] as const satisfies readonly TodoFilter[]

  let {
    activeFilter,
    onFilterChange,
  }: { activeFilter: TodoFilter; onFilterChange: (filter: TodoFilter) => void } = $props()
</script>

<div class="filters">
  {#each FILTERS as filter (filter)}
    <button
      class={activeFilter === filter ? 'contrast' : 'secondary'}
      onclick={() => onFilterChange(filter)}>{filter}</button
    >
  {/each}
</div>

<style>
  .filters {
    display: flex;
    gap: 0.5rem;
    justify-content: end;

    & button {
      text-transform: capitalize;
    }
  }
</style>
