<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import PreloaderComponent from './components/PreloaderComponent.vue';
import { useDataStore } from './store';

const store = useDataStore();

store.fetchData();
</script>

<template>
  <HeaderComponent />

  <div class="wrapper">
    <PreloaderComponent v-if="store.isLoading" />

    <RouterView v-else />
  </div>

  <FooterComponent />
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  flex: 1;
  padding: 80px 32px 32px;
}
</style>
