import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
  state: () => ({
    data: null,
    episodes: null,
    page: 1,
    isLoading: true,
    character: '',
    status: '',
  }),
  actions: {
    async fetchData() {
      try {
        this.isLoading = true;

        let response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${this.page}&name=${this.character}&status=${this.status}`,
        );

        this.data = await response.json();
      } catch (error) {
        console.log('Fetch error: ', error);
      } finally {
        this.isLoading = false;
      }
    },
    setPage(newPage) {
      this.page = newPage;
    },
    setCharacter(characterName) {
      this.page = 1;
      this.character = characterName;
    },
    setStatus(selectedStatus) {
      this.page = 1;
      this.status = selectedStatus;
    },
    // createUrl() {},
  },
});
