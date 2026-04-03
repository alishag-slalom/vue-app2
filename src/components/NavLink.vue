<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  url: string
  icon: string
}>()

const isExternal = computed(() => props.url.startsWith('http') || props.url.startsWith('mailto:'))
</script>

<template>
  <v-btn
    v-if="isExternal"
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    variant="text"
    color="primary"
    size="large"
    class="text-none font-weight-bold text-body-1"
    :prepend-icon="icon || undefined"
  >
    {{ label }}
  </v-btn>
  <v-btn
    v-else
    :to="url"
    variant="text"
    color="primary"
    size="large"
    class="text-none font-weight-bold text-body-1"
    :prepend-icon="icon || undefined"
  >
    {{ label }}
  </v-btn>
</template>
