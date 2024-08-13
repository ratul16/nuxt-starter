import defineStore from 'pinia'
export const useGlobalStore = defineStore('global', {
  state: () => ({
    appName: 'Nuxt 3 Stater Project Template',
    theme: 'light',
    author: {
      name: "Hasibul Alam Ratul",
      role: "Frontend Developer"
    },
  }),
  getters: {
    getTheme() {
      return this.theme;
    },
  },
  actions: {
    initialize() {
      const savedKey = localStorage.getItem('store');
      this.theme = JSON.parse(savedKey).theme;
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}