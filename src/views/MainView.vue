<script setup>
import CharacterCard from '../components/CharacterCard.vue';
import FilterComponent from '../components/FilterComponent.vue';
import PaginationComponent from '../components/PaginationComponent.vue';
import { useDataStore } from '../store';

const props = defineProps({
  title: String,
});
const store = useDataStore();

console.log('data111: ', store.data);
</script>

<template>
  <main>
    <h1 class="main-title">{{ props.title }}</h1>

    <FilterComponent />

    <div class="grid">
      <CharacterCard v-for="data in store.data.results" :key="data.id" :data="data" />
    </div>

    <PaginationComponent />
  </main>
</template>

<style scoped>
.main-title {
  margin: 32px 0;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 24px;
}

@media (min-width: 1440px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1920px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
}
</style>
