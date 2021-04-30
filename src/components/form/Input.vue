<template>
  <div class="form-group">
    <div class="form-group__top">
      <label :for="uuid" class="label" v-if="label" :class="{ 'with-link': labelLink }">
        {{ label }}
      </label>
      <router-link :to="{ name: labelLink.to }" v-if="labelLink">{{ labelLink.text }}</router-link>
    </div>
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input"
      :id="uuid"
      :aria-describedby="errors ? `${uuid}-error` : null"
      :aria-invalid="errors ? true : null"
    />
    <span
      v-if="errors"
      class="feedback is-error"
      :id="`${uuid}-error`"
      aria-live="assertive"
    >{{ errors[0] }}</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import UniqueID from '@/helpers/UniqueID';

export default defineComponent({
  props: {
    label: {
      type: String,
      default: null,
    },
    labelLink: {
      type: Object,
      default: null,
      validator: (object) => object.to && object.text,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    errors: {
      type: Array,
      default: null,
    },
  },
  setup: () => ({
    uuid: UniqueID().getID(),
  }),
});
</script>
