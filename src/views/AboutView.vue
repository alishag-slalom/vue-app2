<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about-page">
    <div class="card">
      <RouterLink to="/" class="back-link">← Back</RouterLink>

      <h1 class="name">About Alisha</h1>
      <p class="bio">
        I'm a designer and developer who loves building beautiful, functional digital experiences.
        I'm passionate about the intersection of design and technology, and I thrive on turning
        creative ideas into reality.
      </p>
      <p class="bio">
        When I'm not designing or coding, you can find me exploring new tools, learning new skills,
        and connecting with other creatives.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.card {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.back-link {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: opacity 0.2s ease;
}

.back-link:hover {
  opacity: 0.7;
}

.name {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-heading);
}

.bio {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text);
  margin: 0;
}
</style>
