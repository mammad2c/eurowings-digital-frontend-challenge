<template>
  <UIHeader id="app-header" class="app-header">
    <UIToolbar>
      <nav class="app-header__nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About us</NuxtLink>
      </nav>
    </UIToolbar>
  </UIHeader>
</template>

<script setup lang="ts">
import { UIHeader, UIToolbar } from "@/ui";
</script>

<style lang="scss" scoped>
.app-header {
  &__nav {
    a {
      color: white;
      text-decoration: none;
      margin-right: 16px;
    }
  }
}
</style>
