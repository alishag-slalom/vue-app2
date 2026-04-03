<script setup lang="ts">
import { useTheme } from 'vuetify'
import LinkButton from '@/components/LinkButton.vue'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const links = [
  { label: 'Portfolio', url: 'https://alishageeslin.com', icon: 'mdi-briefcase-outline' },
  { label: 'Dribbble', url: 'https://dribbble.com/alishageeslin', icon: 'mdi-basketball' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/alishageeslin', icon: 'mdi-linkedin' },
  { label: 'Email', url: 'mailto:hello@alishageeslin.com', icon: 'mdi-email-outline' },
]
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-btn
      icon
      variant="text"
      size="small"
      class="theme-toggle"
      :aria-label="theme.global.current.value.dark ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggleTheme"
    >
      <v-icon>{{ theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
    </v-btn>

    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="5" xl="4">
        <v-card class="pa-8 text-center" rounded="xl" variant="outlined">
          <div class="d-flex justify-center mb-4">
            <v-avatar size="120" color="surface-variant">
              <span class="text-h4 font-weight-bold" style="color: rgb(var(--v-theme-primary))">AG</span>
            </v-avatar>
          </div>

          <v-card-title class="text-h5 font-weight-bold pb-1">Alisha Geeslin</v-card-title>
          <v-card-subtitle class="pb-6">Designer · Developer · Creative Thinker</v-card-subtitle>

          <v-card-text class="pa-0">
            <div class="d-flex flex-column ga-3">
              <LinkButton
                v-for="link in links"
                :key="link.label"
                :label="link.label"
                :url="link.url"
                :icon="link.icon"
              />
            </div>
          </v-card-text>

          <v-card-actions class="justify-center pt-4">
            <v-btn to="/about" variant="text" color="primary" class="text-none">About Me</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
}
</style>
