<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <v-btn
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    variant="outlined"
    size="large"
    block
    rounded="lg"
    class="text-none link-btn"
  >
    <v-icon style="margin-right: 12px">{{ icon }}</v-icon>
    {{ label }}
  </v-btn>
</template>

<style scoped>
.link-btn {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.link-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(var(--v-theme-primary), 0.15);
}
</style>
