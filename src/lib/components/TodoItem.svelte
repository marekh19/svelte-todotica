<script lang="ts">
  import type { Todo } from '$lib/types'
  import { Trash } from '@lucide/svelte'
  import { fade } from 'svelte/transition'

  let {
    todo,
    onToggle,
    onDelete,
  }: { todo: Todo; onToggle: (id: string) => void; onDelete: (id: string) => void } = $props()
</script>

<article
  class="item"
  transition:fade={{ duration: 200 }}
>
  <label>
    <input
      type="checkbox"
      checked={todo.isDone}
      onchange={() => onToggle(todo.id)}
    />
    <span class:done={todo.isDone}>{todo.title}</span>
  </label>
  <button
    type="button"
    onclick={() => onDelete(todo.id)}
    class="outline secondary"
    aria-label="Remove todo"
  >
    <Trash />
  </button>
</article>

<style>
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & button {
      margin-bottom: 0;
      display: inline-flex;
      align-items: center;
    }

    & .done {
      text-decoration: line-through;
    }
  }
</style>
