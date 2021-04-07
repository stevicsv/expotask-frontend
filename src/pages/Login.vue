<template>
  <div class="login">
    <div v-if="user">{{ user.name }}</div>

    <form @submit.prevent="login">
      <input type="email" v-model="form.email" />
      <span v-if="form.errors.email">{{ form.errors.email[0] }}</span>
      <input type="password" v-model="form.password" />
      <span v-if="form.errors.password">{{ form.errors.password[0] }}</span>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, computed, reactive } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const form = reactive({
      email: '',
      password: '',
      errors: [],
    });

    const login = async () => {
      try {
        await store.dispatch('login', form);
      } catch ({ errors }) {
        form.errors = errors;
      }
    };

    return {
      form,
      user: computed(() => store.state.user),
      login,
    };
  },
});
</script>
