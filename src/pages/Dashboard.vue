<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div v-if="user">{{ user.name }}</div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const logout = async () => {
      await store.dispatch('logout');
      router.push({ name: 'Login' });
    };

    return {
      user: computed(() => store.state.user),
      logout,
    };
  },
});
</script>
