<template>
  <div class="dropdown">
    <button class="dropdown-trigger" @click="toggle">
      <slot name="trigger" />
    </button>
    <transition name="show">
      <div class="dropdown-menu" v-if="visible" v-click-away="close">
        <slot name="menu" />

        <transition-group
          tag="div"
          @enter="onEnter"
          @appear="onAppear"
          class="dropdown-wrapper"
          :style="{ height: menuHeight }"
          name="slide"
          appear
        >
          <slot
            name="multipleMenu"
            :active="active"
            :isActive="isActive"
            :setActive="setActive"
            :close="close"
          />
        </transition-group>

        <span class="triangle"></span>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  defineComponent, h, reactive, toRefs,
} from 'vue';

export const Dropdown = defineComponent({
  setup() {
    const state = reactive({
      visible: false,
      active: 'main',
      menuHeight: null,
      back: false,
    });

    const toggle = () => {
      state.visible = !state.visible;
    };

    const close = () => {
      state.visible = false;
    };

    const setActive = (name) => {
      state.active = true;

      if (name !== 'main') {
        state.active = false;
      }

      state.active = name;
    };

    const isActive = (name) => state.active === name;

    const onEnter = (element) => {
      const { height } = getComputedStyle(element);
      state.menuHeight = height;
    };

    const onAppear = (element) => {
      if (state.menuHeight === null) {
        if (element.id === 'main') {
          const { height } = getComputedStyle(element);
          state.menuHeight = height;
        }
      }
    };

    return {
      ...toRefs(state),
      toggle,
      close,
      setActive,
      isActive,
      onEnter,
      onAppear,
    };
  },
});

export const DropdownGroup = defineComponent({
  setup(_, { slots }) {
    return () => h('div', { class: 'dropdown-group' }, slots.default());
  },
});

export const DropdownItem = defineComponent({
  setup(_, { slots }) {
    return () => h('div', { class: 'dropdown-item' }, slots.default());
  },
});

export default Dropdown;
</script>
