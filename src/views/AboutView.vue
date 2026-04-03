<script setup lang="ts">
</script>

<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="6" lg="5" xl="4">
        <v-card class="pa-8 about-card" rounded="xl" elevation="8">
          <v-card-title class="text-h5 font-weight-bold px-0">About Alisha</v-card-title>

          <v-card-text class="px-0 text-body-1">
            <p class="mb-4">
              I'm a designer and developer who loves building beautiful, functional digital experiences.
              I'm passionate about the intersection of design and technology, and I thrive on turning
              creative ideas into reality.
            </p>
            <p>
              When I'm not designing or coding, you can find me exploring new tools, learning new skills,
              and connecting with other creatives.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-card {
  background: rgb(var(--v-theme-surface)) !important;
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
}
</style>
