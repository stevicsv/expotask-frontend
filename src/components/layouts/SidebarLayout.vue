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
        Test
        <div>
          {{ user.name }}
          <Icon name="chevron down" />
        </div>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { defineComponent, watch, ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

import Logo from '@/components/Logo.vue';
import Icon from '@/components/Icon.vue';

export default defineComponent({
  components: { Logo, Icon },
  setup() {
    const route = useRoute();
    const store = useStore();

    const yPos = ref(null);
    const user = computed(() => store.state.user);

    onMounted(() => {
      const el = document.querySelector(`a[href="${route.fullPath}"]`);
      yPos.value = el.offsetTop;
    });

    watch(
      () => route.name,
      () => {
        const el = document.querySelector(`a[href="${route.fullPath}"]`);
        yPos.value = el.offsetTop;
      }
    );

    return { yPos, user };
  },
});
</script>

<style lang="scss">
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
    margin: 2rem 4rem;
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
  margin-bottom: 2.5rem;
}
</style>
