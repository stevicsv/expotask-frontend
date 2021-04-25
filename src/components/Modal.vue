<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="modal-title">
        <h4>{{ title }}</h4>
        <div class="modal-title-icon" @click="$emit('close')">
          <Icon name="close" />
        </div>
      </div>
      <div class="modal-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import Icon from './Icon.vue';

export default defineComponent({
  components: { Icon },
  props: ['title'],
  emits: ['close'],
});
</script>
