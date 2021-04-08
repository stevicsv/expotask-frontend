<template>
  <div class="login">
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
import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      email: '',
      password: '',
      errors: [],
    });

    const login = async () => {
      try {
        await store.dispatch('login', form);
        router.push({ name: 'Dashboard' });
      } catch ({ errors }) {
        form.errors = errors;
      } finally {
        form.email = '';
        form.password = '';
      }
    };

    return {
      form,
      login,
    };
  },
});
</script>
