<template>
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
        <Dropdown>
          <template #trigger>
            <h4 v-if="user">
              {{ user.name }}
              <icon name="chevron down" style="width: 1rem" />
            </h4>
          </template>
          <template #menu>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem @click="logout">Logout</DropdownItem>
          </template>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Logo from '@/components/Logo.vue';
import { Dropdown, DropdownItem } from '@/components/Dropdown.vue';
import Icon from '@/components/Icon.vue';

export default defineComponent({
  components: {
    Logo,
    Dropdown,
    DropdownItem,
    Icon,
  },
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

    const redirect = (name) => {
      router.push({ name });
    };

    return {
      user: computed(() => store.state.user),
      logout,
      visible,
      toggle,
      redirect,
    };
  },
});
</script>
