<script setup>
import { ref, computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const key = ref(false);
const name = ref(store.character);
const statusVariant = ['All', 'Alive', 'Dead'];

let titleText = computed(() => {
  return store.status ? store.status : 'All';
});

const selectStatus = status => {
  const st = status === 'All' ? '' : status;

  titleText.value = status;

  store.setStatus(st);

  store.fetchData();
};

const searchCharacter = name => {
  store.setCharacter(name);

  store.fetchData();
};
</script>

<template>
  <div class="filter">
    <div class="filter__search-wrapper">
      <input type="text" class="filter__search" placeholder="Enter character's name" v-model="name" />

      <div class="filter__search-btn" @click="() => searchCharacter(name)">Search</div>
    </div>

    <div class="filter__status">
      <div class="filter__status-title" @click="() => (key = !key)">{{ titleText }}</div>

      <div class="filter__status-list" :class="[key ? 'isActive' : '']">
        <div
          class="filter__status-item"
          v-for="status in statusVariant"
          :key="status"
          @click="() => selectStatus(status)"
        >
          {{ status }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter {
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: flex-end;
  margin: 48px 0;
}

.filter__search-wrapper {
  flex: 1;
  display: flex;
  gap: 12px;
}

.filter__search {
  border: none;
  border-bottom: 1px solid rgb(60, 62, 68);
  border-radius: 0;
  height: 56px;
  padding: 12px 8px;
  font-size: 18px;
  line-height: 100%;
  background-color: #f2f2f2;
  flex: 1;
}

.filter__status {
  position: relative;
  width: 150px;
}

.filter__search-btn {
  width: 150px;
}

.filter__search-btn,
.filter__status-title {
  padding: 8px 12px;
  font-size: 18px;
  line-height: 100%;
  border-radius: 4px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

.filter__status-list {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: -270%;
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  opacity: 0;
  pointer-events: none;
}

.filter__status-list.isActive {
  opacity: 1;
  pointer-events: auto;
}

.filter__status-item {
  width: 100%;
  padding: 8px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

.filter__search-btn:hover,
.filter__status-title:hover,
.filter__status-item:hover {
  background-color: rgba(0, 0, 0, 0.08);
}

.filter__status-item:not(:last-child) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
