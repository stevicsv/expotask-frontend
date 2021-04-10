<template>
  <!-- eslint-disable max-len -->
  <div class="dashboard">
    <div class="dashboard__header">
      <div class="dashboard__header-logo">
        <Logo class="logo" />
        <div class="vertical-line"></div>
        <p>Dashboard</p>
      </div>

      <div class="dashboard__header-autharea">
        <button class="is-smaller is-secondary">Create Team</button>
        <div class="vertical-line"></div>
        <h4 @click="toggle" style="display: block; margin-right: 10px">
          <div v-if="user">
            {{ user.name }}
            <svg
              class="chevron"
              viewBox="0 0 11 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.292786 1.29299C0.480314 1.10552 0.734622 1.0002 0.999786 1.0002C1.26495 1.0002 1.51926 1.10552 1.70679 1.29299L4.99979 4.58599L8.29279 1.29299C8.38504 1.19748 8.49538 1.1213 8.61739 1.06889C8.73939 1.01648 8.87061 0.988893 9.00339 0.987739C9.13617 0.986585 9.26785 1.01189 9.39074 1.06217C9.51364 1.11245 9.62529 1.1867 9.71918 1.28059C9.81308 1.37449 9.88733 1.48614 9.93761 1.60904C9.98789 1.73193 10.0132 1.86361 10.0121 1.99639C10.0109 2.12917 9.9833 2.26039 9.93089 2.38239C9.87848 2.5044 9.8023 2.61474 9.70679 2.70699L5.70679 6.70699C5.51926 6.89446 5.26495 6.99978 4.99979 6.99978C4.73463 6.99978 4.48032 6.89446 4.29279 6.70699L0.292786 2.70699C0.105315 2.51946 0 2.26515 0 1.99999C0 1.73483 0.105315 1.48052 0.292786 1.29299Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </h4>

        <div class="dropdown" v-if="visible">
          <li class="dropdown__item">Profile</li>
          <li class="dropdown__item" @click="logout">Logout</li>
          <span class="triangle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Logo from '@/components/Logo.vue';

export default defineComponent({
  components: { Logo },
  setup() {
    const store = useStore();
    const router = useRouter();
    const visible = ref(false);

    const toggle = () => {
      visible.value = !visible.value;
    };

    const logout = async () => {
      await store.dispatch('logout');
      router.push({ name: 'Login' });
    };

    return {
      user: computed(() => store.state.user),
      logout,
      visible,
      toggle,
    };
  },
});
</script>
