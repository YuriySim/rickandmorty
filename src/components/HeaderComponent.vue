<script setup>
import { RouterLink } from 'vue-router';
import RickAndMorty from './icons/RickAndMorty.vue';
</script>

<template>
  <header>
    <RouterLink to="/" class="logo">
      <RickAndMorty />
    </RouterLink>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/rick">Rick</RouterLink>
      <RouterLink to="/morty">Morty</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(39, 43, 51);
}

nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

nav a {
  color: #fff;
  height: 100%;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.router-link-active:not(.logo):after {
  content: '';
  position: absolute;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3px;
  background-color: hsla(160, 100%, 37%, 1);
}

.logo {
  position: absolute;
  left: 32px;
  color: #fff;
}

.logo:hover {
  color: hsla(160, 100%, 37%, 1);
  background-color: transparent;
}
</style>
