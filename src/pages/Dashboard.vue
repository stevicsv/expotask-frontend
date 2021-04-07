<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div v-if="user">{{ user.name }}</div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.state.user),
    };
  },
});
</script>
