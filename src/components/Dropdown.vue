<template>
  <div class="dropdown">
    <button class="dropdown-trigger" @click="toggle">
      <slot name="trigger" />
    </button>
    <div class="dropdown-menu" v-if="visible">
      <slot name="menu" />
      <span class="triangle"></span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue';

export const Dropdown = defineComponent({
  setup() {
    const visible = ref(false);

    const toggle = () => {
      visible.value = !visible.value;
    };

    provide('toggle', toggle);

    return {
      visible,
      toggle,
    };
  },
});

export const DropdownItem = {
  inject: ['toggle'],
  render() {
    return <div class="dropdown-item" onClick={this.toggle}>{this.$slots.default()}</div>;
  },
};

export default Dropdown;
</script>
