<template>
  <QBtn v-bind="$attrs">
    <slot />
  </QBtn>
</template>

<script setup lang="ts">
import { QBtn, QBtnProps } from "quasar";

interface ButtonProps extends QBtnProps {}

defineProps<ButtonProps>();
</script>
