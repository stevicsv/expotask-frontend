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
  <svg
    v-if="name === 'search'"
    class="icon"
    id="search"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.005 2.002a4.003 4.003 0 100 8.007 4.003 4.003 0 000-8.007zM0 6.005a6.004 6.004 0 1110.898 3.479l4.821 4.82a1 1 0 01-1.415 1.415l-4.82-4.82A6.004 6.004 0 010 6.006z"
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
