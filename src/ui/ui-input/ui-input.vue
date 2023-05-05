<template>
  <QInput v-model="value" outlined v-bind="$attrs">
    <slot></slot>
  </QInput>
</template>

<script setup lang="ts">
import { QInput } from "quasar";
import type { QInputProps } from "quasar";

export interface UIInputProps extends QInputProps {}

const props = defineProps<UIInputProps>();

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
