<template>
  <button
    type="button"
    class="lmc-checkbox"
    :class="{
      'lmc-checkbox_checked': modelValue,
    }"
    :disabled="disabled"
    @click="toggle"
  >
    <span
      class="lmc-checkbox__box"
      :class="{
        'lmc-checkbox_disabled': disabled,
      }"
    >
      <img
        v-if="modelValue"
        :src="checkIcon"
        alt=""
        class="lmc-checkbox__icon"
      />
    </span>

    <span v-if="!!label" class="lmc-checkbox__label">
      {{ label }}
    </span>
  </button>
</template>

<script setup lang="ts">
import checkIcon from '../../assets/check.svg?url';

const props = withDefaults(
  defineProps<{
    modelValue: boolean,
    label?: string,
    disabled?: boolean,
  }>(),
  {
    label: '',
    disabled: false,
  }
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>();

function toggle() {
  if (props.disabled) return;
  emit('update:modelValue', !props.modelValue);
};
</script>

<style scoped>
.lmc-checkbox {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  border: none;
  padding: 0;
  background: transparent;
  flex-wrap: wrap;
  justify-content: center;
}

.lmc-checkbox:focus {
  outline: none;
}

.lmc-checkbox_disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.lmc-checkbox__box {
  min-width: 20px;
  min-height: 20px;
  border-radius: 6px;
  border: 2px solid #d6d6d6;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.lmc-checkbox_checked .lmc-checkbox__box {
  background: #4a4a4a;
  border-color: #4a4a4a;
}

.lmc-checkbox__icon {
  width: 15px;
  height: 10px;
  display: block;
}

.lmc-checkbox__label {
  font-size: 18px;
  color: #000;
}
</style>
