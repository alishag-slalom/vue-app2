<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavBar from '@/components/AppNavBar.vue'
</script>

<template>
  <v-app class="app-bg">
    <AppNavBar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
.app-bg {
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(var(--v-theme-primary), 0.06) 0%,
    transparent 60%
  ) !important;
}
</style>
