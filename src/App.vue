<template>
  <component :is="layoutName">
    <router-view />
  </component>
</template>

<script>
/* eslint-disable */
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import SidebarLayout from '@/components/layouts/SidebarLayout.vue';

export default defineComponent({
  components: { DefaultLayout, SidebarLayout },
  setup() {
    const route = useRoute();
    const layoutName = computed(
      () => `${route.meta.layout || 'default'}-layout`
    );

    return { layoutName };
  },
});
</script>
