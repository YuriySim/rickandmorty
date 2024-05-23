<script setup>
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const arrayPages = computed(() => {
  return Array.from(new Array(store.data.info.pages), (e, i) => ++i);
});

const changePage = page => {
  store.setPage(page);
  store.fetchData();
};
</script>

<template>
  <div class="pagination">
    <div
      class="pagination__item"
      v-for="page of arrayPages"
      :key="page"
      :class="[page === store.page ? 'isActive' : '']"
      @click="() => changePage(page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<style scoped>
.pagination {
  width: 100%;
  margin: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.pagination__item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(60, 62, 68);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 100%;
  color: rgb(60, 62, 68);
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

.pagination__item:hover {
  background: rgb(85, 204, 68);
}

.pagination__item.isActive {
  background: rgb(85, 204, 68);
}
</style>
