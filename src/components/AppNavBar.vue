<script setup lang="ts">
import { useTheme } from 'vuetify'
import NavLink from '@/components/NavLink.vue'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app-bar flat color="surface-variant" class="navbar">
    <v-container class="d-flex align-center justify-center">
      <NavLink label="Home" url="/" icon="" />
      <NavLink label="About Me" url="/about" icon="" />
      <NavLink label="Contact Me" url="mailto:hello@alishageeslin.com" icon="" />
      <NavLink label="Portfolio" url="https://alishageeslin.com" icon="" />
      <v-spacer />
      <v-btn
        icon
        variant="tonal"
        color="primary"
        size="small"
        :aria-label="theme.global.current.value.dark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggleTheme"
      >
        <v-icon>{{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.navbar {
  border-bottom: 1px solid rgba(var(--v-theme-primary), 0.1);
}
</style>
