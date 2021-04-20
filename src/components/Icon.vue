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
  <svg
    v-if="name === 'more'"
    class="icon"
    id="more"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path
      d="M5.2 7.6a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zm4.8 0a1.6 1.6 0 11-3.2 0 1.6 1.6 0 013.2 0zm3.2 1.6a1.6 1.6 0 100-3.2 1.6 1.6 0 000 3.2z"
      fill="currentFill"
    />
  </svg>
  <svg
    v-if="name === 'left'"
    class="icon"
    id="left"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.4 2.4a.8.8 0 01.8.8v9.6a.8.8 0 11-1.6 0V3.2a.8.8 0 01.8-.8zm6.165 2.634a.8.8 0 010 1.132L7.531 7.2H13.6a.8.8 0 110 1.6H7.53l1.035 1.034a.8.8 0 01-1.131 1.132l-2.4-2.4a.8.8 0 010-1.132l2.4-2.4a.8.8 0 011.131 0z"
      fill="currentFill"
    />
  </svg>
  <svg
    v-if="name === 'settings'"
    class="icon"
    id="settings"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
  >
    <path
      stroke="currentFill"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.333"
      d="M9.117 2.878c-.284-1.17-1.95-1.17-2.234 0a1.149 1.149 0 01-1.714.71c-1.03-.627-2.207.551-1.58 1.58a1.15 1.15 0 01-.711 1.715c-1.17.284-1.17 1.95 0 2.234a1.15 1.15 0 01.71 1.714c-.627 1.03.551 2.207 1.58 1.58a1.148 1.148 0 011.715.711c.284 1.17 1.95 1.17 2.234 0a1.15 1.15 0 011.714-.71c1.03.627 2.207-.551 1.58-1.58a1.148 1.148 0 01.711-1.715c1.17-.284 1.17-1.95 0-2.234a1.15 1.15 0 01-.71-1.714c.627-1.03-.551-2.207-1.58-1.58a1.15 1.15 0 01-1.715-.711z"
    />
    <path
      stroke="currentFill"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.333"
      d="M9.414 9.414a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828z"
    />
  </svg>
  <svg
    v-if="name === 'close'"
    class="icon"
    id="close"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path
      fill="currentFill"
      fill-rule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clip-rule="evenodd"
    />
  </svg>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['name'],
});
</script>

<style lang="scss">
#settings {
  fill: transparent;
  stroke: #000;
}
</style>
