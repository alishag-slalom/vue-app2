<script setup lang="ts">
import LinkButton from '@/components/LinkButton.vue'

const links = [
  { label: 'Portfolio', url: 'https://alishageeslin.com', icon: 'mdi-briefcase-outline' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/alishageeslin', icon: 'mdi-linkedin' },
  { label: 'Email', url: 'mailto:hello@alishageeslin.com', icon: 'mdi-email-outline' },
]
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="5" xl="4">
        <v-card class="pa-8 text-center bio-card" rounded="xl" elevation="8">
          <div class="d-flex justify-center mb-4">
            <v-avatar size="120" color="surface-variant">
              <span class="text-h4 font-weight-bold" style="color: rgb(var(--v-theme-primary))">AG</span>
            </v-avatar>
          </div>

          <v-card-title class="text-h5 font-weight-bold pb-1">Alisha Geeslin</v-card-title>
          <v-card-subtitle class="pb-6">Designer · Strategizer · Creative Thinker</v-card-subtitle>

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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.bio-card {
  background: rgb(var(--v-theme-surface)) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
}
</style>
