<template>
  <QForm> <slot></slot> </QForm>
</template>

<script setup lang="ts">
import { QForm, QFormProps } from "quasar";

interface FormWrapperProps extends QFormProps {}

defineProps<FormWrapperProps>();
</script>
