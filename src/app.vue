<template>
  <UILayout view="hHh lpR fFf">
    <AppHeader />

    <UIPageContainer>
      <div>
        <NuxtPage />
      </div>
    </UIPageContainer>

    <AppFooter />
  </UILayout>
</template>

<script setup lang="ts">
import { AppHeader, AppFooter } from "@/components";
import { UIPageContainer, UILayout } from "@/ui";
</script>
