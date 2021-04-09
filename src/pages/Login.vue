<template>
  <div class="login">
    <div class="login__header">
      <div class="login__header-logo">
        <Logo class="logo" />
        <div class="vertical-line"></div>
        <p>Sign in page</p>
      </div>

      <div class="login__header-create-account">
        <h4>New to Expotask?</h4>
        <button class="is-secondary">Create an Account</button>
      </div>
    </div>

    <div class="form-wrapper">
      <Logo class="logo mobile-logo" />

      <form @submit.prevent="login">
        <div class="form-group">
          <label class="form-label">Email address</label>
          <input class="form-input" type="email" v-model="form.email" />
          <span class="form-feedback is-error" v-if="form.errors.email">
            {{ form.errors.email[0] }}
          </span>
        </div>

        <div class="form-group">
          <label class="form-label with-link">
            Password
            <a href="#">Forgot Password?</a>
          </label>
          <input class="form-input" type="password" v-model="form.password" />
          <span class="form-feedback is-error" v-if="form.errors.password">
            {{ form.errors.password[0] }}
          </span>
        </div>

        <div class="form-group">
          <button
            type="submit"
            role="button"
            class="is-primary"
            :class="{ 'is-loading': form.loading }"
            :disabled="form.loading"
          >
            <div class="loader" v-if="form.loading" />
            Login
          </button>
        </div>
      </form>
    </div>

    <div class="bottom">
      <div class="mobile-only">
        <a href="#">Create an Account</a>
        <div class="horizontal-line"></div>
      </div>

      <p class="copyright">
        © Copyright {{ new Date().getFullYear() }}, Expotask
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Logo from '@/components/Logo.vue';

export default defineComponent({
  components: { Logo },
  setup() {
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      email: '',
      password: '',
      errors: [],
      loading: false,
    });

    const login = async () => {
      form.loading = true;
      try {
        await store.dispatch('login', form);
        router.push({ name: 'Dashboard' });
      } catch ({ errors }) {
        form.errors = errors;
      } finally {
        form.password = '';
        form.loading = false;
      }
    };

    return {
      form,
      login,
    };
  },
});
</script>
