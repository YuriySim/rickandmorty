<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: Object,
});

console.log('props: ', props.data);
const data = props.data;

const getStatus = computed(() => {
  return data.status === 'Alive' ? true : false;
});
</script>

<template>
  <div class="item">
    <div class="item__img-wrapper">
      <img :src="data.image" :alt="data.name" />
    </div>

    <div class="item__content">
      <div class="item__section">
        <h2>{{ data.name }}</h2>

        <div class="item__status" :class="[getStatus ? 'alive' : 'dead']">
          <span v-if="data.status !== 'unknown'" class="item__status-icon"></span>

          <div class="item__status-text">{{ data.status }} - {{ data.species }}</div>
        </div>
      </div>

      <div class="item__section">
        <span>Last known location:</span>

        <div class="item__text">{{ data.origin.name }}</div>
      </div>

      <div class="item__section">
        <span>First seen in:</span>

        <div class="item__text">{{}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  cursor: default;
  border-radius: 12px;
  overflow: hidden;
  background: rgb(60, 62, 68);
}

.item span {
  font-size: 16px;
  font-weight: 500;
  color: rgb(158, 158, 158);
}

.item__img-wrapper {
  flex: 2 1 0%;
}

.item__img-wrapper img {
  object-fit: cover;
  max-width: none;
  object-position: 50% 50%;
  min-width: 100%;
  min-height: 100%;
}
.item__content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px;
  flex: 3 1 0%;
}

.item__section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item__content h2 {
  font-size: 24px;
  font-weight: 800;
  color: #fff;
}

.item__status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
}

.item__status-text {
  font-size: 16px;
  line-height: 100%;
  font-weight: 500;
  color: #fff;
}

.item__status-icon {
  height: 9px;
  width: 9px;
  border-radius: 50%;
}

.item__text {
  font-size: 18px;
  line-height: 100%;
  color: rgb(245, 245, 245);
}

.dead .item__status-icon {
  background: rgb(214, 61, 46);
}

.alive .item__status-icon {
  background: rgb(85, 204, 68);
}
</style>
