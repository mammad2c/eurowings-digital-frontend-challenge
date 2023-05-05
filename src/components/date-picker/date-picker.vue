<template>
  <div class="full-width">
    <UIInput
      v-model="value"
      :label="label"
      readonly
      class="ui-date-picker-input"
      :rules="rules"
    >
      <QPopupProxy cover transition-show="scale" transition-hide="scale">
        <QDate v-model="value">
          <div class="row items-center justify-end">
            <UIButton v-close-popup label="Close" color="primary" flat />
          </div>
        </QDate>
      </QPopupProxy>
    </UIInput>
  </div>
</template>

<script setup lang="ts">
import { QDate, QPopupProxy } from "quasar";
import { UIButton, UIInputProps, UIInput } from "@/ui";

interface UIDatePickerProps {
  modelValue: string;
  label?: UIInputProps["label"];
  rules?: UIInputProps["rules"];
}

const props = defineProps<UIDatePickerProps>();
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

<style lang="scss">
.ui-date-picker-input {
  &.q-field--readonly {
    .q-field__control::before {
      border-bottom-style: solid;
    }
  }
}
</style>
