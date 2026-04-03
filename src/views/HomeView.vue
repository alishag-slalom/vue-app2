<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'

const links = [
  { label: 'Portfolio', url: 'https://alishageeslin.com' },
  { label: 'Dribbble', url: 'https://dribbble.com/alishageeslin' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/alishageeslin' },
  { label: 'Email', url: 'mailto:hello@alishageeslin.com' },
]
</script>

<template>
  <div class="bio-page">
    <ThemeToggle />

    <div class="card">
      <div class="avatar">
        <span class="avatar-placeholder">AG</span>
      </div>

      <h1 class="name">Alisha Geeslin</h1>
      <p class="tagline">Designer · Developer · Creative Thinker</p>

      <div class="links">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="link-button"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bio-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  position: relative;
}

.card {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--color-avatar-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  border: 3px solid var(--color-accent);
}

.avatar-placeholder {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-accent);
  user-select: none;
}

.name {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-heading);
}

.tagline {
  font-size: 0.95rem;
  color: var(--color-text-muted);
  margin: 0 0 1rem 0;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.link-button {
  display: block;
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-button-text);
  background: var(--color-button-bg);
  border: 1.5px solid var(--color-button-border);
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.link-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px var(--color-button-shadow);
  background: var(--color-button-hover-bg);
}

.link-button:active {
  transform: translateY(0);
}
</style>
