<template>
  <!-- eslint-disable max-len -->
  <svg
    v-if="name === 'chevron down'"
    class="icon"
    id="chevronDown"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 7"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M.293 1.293a1 1 0 011.414 0L5 4.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      fill="currentFill"
    />
  </svg>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['name'],
});
</script>
