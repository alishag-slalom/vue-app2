<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ThemeToggle from '@/components/ThemeToggle.vue'

const links = [
  {
    label: 'Portfolio',
    url: 'https://alishageeslin.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><polyline points="16 3 12 7 8 3"/></svg>',
  },
  {
    label: 'Dribbble',
    url: 'https://dribbble.com/alishageeslin',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/></svg>',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/alishageeslin',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  },
  {
    label: 'Email',
    url: 'mailto:hello@alishageeslin.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  },
]
</script>

<template>
  <div class="bio-page">
    <nav class="top-nav">
      <RouterLink to="/about" class="about-link">About Me</RouterLink>
    </nav>
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
          <span class="link-icon" v-html="link.icon"></span>
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-nav {
  position: fixed;
  top: 1.25rem;
  left: 1.25rem;
  z-index: 100;
}

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
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

.about-link {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-accent);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.about-link:hover {
  opacity: 0.7;
}
</style>
