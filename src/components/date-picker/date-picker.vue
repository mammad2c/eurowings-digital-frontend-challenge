<template>
  <div class="full-width">
    <UIInput
      v-model="formattedValue"
      :label="label"
      readonly
      class="ui-date-picker-input"
      :rules="rules"
      :dense="dense"
      :hide-bottom-space="hideBottomSpace"
    >
      <QPopupProxy cover transition-show="scale" transition-hide="scale">
        <QDate v-model="value" :range="range" :options="options">
          <div class="row items-center justify-end">
            <UIButton v-close-popup label="Close" color="primary" flat />
          </div>
        </QDate>
      </QPopupProxy>
    </UIInput>
  </div>
</template>

<script setup lang="ts">
import { QDate, QPopupProxy, QDateProps } from "quasar";
import { UIButton, UIInputProps, UIInput } from "@/ui";

interface UIDatePickerProps {
  modelValue: QDateProps["modelValue"];
  label?: UIInputProps["label"];
  rules?: UIInputProps["rules"];
  dense?: boolean | undefined;
  hideBottomSpace?: boolean | undefined;
  range?: boolean | undefined;
  options?: QDateProps["options"];
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

const formattedValue = computed(() => {
  if (props.range) {
    if (typeof value.value !== "object") {
      return value.value;
    }

    return `${value.value?.from || ""} - ${value.value?.to || ""}`;
  }

  return value.value;
});
</script>

<style lang="scss">
.ui-date-picker-input {
  &.q-field--readonly {
    .q-field__control::before {
      border-style: solid;
    }
  }
}
</style>
