<template>
  <div>
    <div id="hero" class="flex items-center"></div>
    <div class="hero-form">
      <UICard>
        <SearchFlights />
      </UICard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SearchFlights } from "@/components";
import { UICard } from "@/ui";
</script>

<style lang="scss" scoped>
#hero {
  min-height: 50vh;
  background-image: url("@/assets/hero.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-form {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  transform: translateY(-50%);
}
</style>
