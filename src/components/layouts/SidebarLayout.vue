<template>
  <div class="sidebar-layout">
    <div class="sidebar">
      <Logo class="logo" />
      <div class="nav">
        <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
        <router-link :to="{ name: 'Teams' }">Teams</router-link>
      </div>
      <div class="indication-line">
        <div
          class="active-line"
          v-if="yPos"
          :style="{ top: yPos + 8 + 'px' }"
          ref="activeLine"
        />
      </div>
    </div>
    <div class="content">
      <div class="topbar">
        <div class="search">
          <Icon name="search" />
          <input placeholder="Search for teams..." />
        </div>

        <Dropdown>
          <template #trigger>
            <div class="user">
              <img
                src="https://eu.ui-avatars.com/api/?name=Austyn+Bernhard"
                alt="avatar"
              />
              <h4 v-if="user">{{ user.name }}</h4>
              <Icon name="chevron down" />
            </div>
          </template>
          <template #menu>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem @click="logout">Logout</DropdownItem>
          </template>
        </Dropdown>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent, watch, ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

import Logo from '@/components/Logo.vue';
import Icon from '@/components/Icon.vue';
import { Dropdown, DropdownItem } from '@/components/Dropdown.vue';

export default defineComponent({
  components: { Logo, Icon, Dropdown, DropdownItem },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const yPos = ref(null);
    const user = computed(() => store.state.user);

    const logout = async () => {
      await store.dispatch('logout');
      router.push({ name: 'Login' });
    };

    const setYPos = () => {
      const el = document.querySelector(`a[href="${route.fullPath}"]`);

      if (el) {
        yPos.value = el.offsetTop;
      }
    };

    onMounted(() => {
      setYPos();
    });

    watch(
      () => route.name,
      () => {
        setYPos();
      }
    );

    return { yPos, user, logout };
  },
});
</script>

<style lang="scss">
@use '../.././assets/abstracts/colors' as *;

.sidebar-layout {
  display: grid;
  grid-template-columns: 264px auto;

  .sidebar {
    position: relative;
    padding: 2rem 2.5rem;
    height: 100vh;

    .indication-line {
      position: absolute;
      top: 0;
      right: 0;
      width: 2px;
      height: 100vh;
      background-color: #eaecf0;

      .active-line {
        position: relative;
        width: 2px;
        height: 24px;
        background-color: #f46b3e;
        transition: all 300ms ease-in-out;
      }
    }
  }

  .content {
    min-width: 61.25rem;
    margin-left: 4.75rem;
    margin-right: 7.3125rem;
  }
}

.sidebar {
  .logo {
    width: 8.75rem;
  }

  .nav {
    margin-top: 2rem;

    a {
      display: flex;
      align-items: center;
      height: 2.5rem;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;
      color: #a2a9b1;
      cursor: pointer;
      user-select: none;

      &.is-active {
        color: #54595d;
      }
    }
  }
}

.topbar {
  margin-top: 2rem;
  margin-bottom: 2.5rem;

  .search {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: $gray-400;
    }

    input {
      width: 20rem;
      border: none;
      background: transparent;
      color: $gray-500;
      height: 1rem;

      &:focus {
        box-shadow: none;
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: center;

    img[alt='avatar'] {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }

    h4 {
      color: $gray-600;
      font-weight: 500;
      margin: 0 0.75rem;
    }

    svg {
      width: 0.75rem;
      fill: $gray-400;
      cursor: pointer;
    }
  }
}
</style>
