<template>
  <QSelect v-model="value" outlined v-bind="$attrs" />
</template>

<script setup lang="ts">
import { QSelect } from "quasar";
import type { QSelectProps } from "quasar";

export interface UISelectProps extends QSelectProps {}

const props = defineProps<UISelectProps>();

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
