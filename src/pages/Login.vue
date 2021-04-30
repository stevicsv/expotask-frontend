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
        <el-input
          label="Email Address"
          type="email"
          v-model="email"
          :errors="errors.email"
        />

        <el-input
          label="Password"
          :labelLink="{ to: 'ForgotPassword', text: 'Forgot password?' }"
          type="password"
          v-model="password"
          :errors="errors.password"
        />

        <div class="form-group">
          <button
            type="submit"
            role="button"
            class="is-primary"
            :class="{ 'is-loading': loading }"
            :disabled="loading"
          >
            <div class="loader" v-if="loading" />Login
          </button>
        </div>
      </form>
    </div>

    <div class="bottom">
      <div class="mobile-only">
        <a href="#">Create an Account</a>
        <div class="horizontal-line"></div>
      </div>

      <p class="copyright">© Copyright {{ new Date().getFullYear() }}, Expotask</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Logo from '@/components/Logo.vue';
import Input from '@/components/form/Input.vue';

export default defineComponent({
  components: { Logo, 'el-input': Input },
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
        await store.dispatch('auth/login', form);
        router.push({ name: 'Dashboard' });
      } catch ({ errors }) {
        form.errors = errors;
      } finally {
        form.password = '';
        form.loading = false;
      }
    };

    return {
      ...toRefs(form),
      login,
    };
  },
});
</script>
