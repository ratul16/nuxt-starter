export const useGlobalStore = defineStore('global', {
  state: () => ({
    appName: 'Nuxt 3 Stater Project Template',
    author: {
      name: "Hasibul Alam Ratul",
      role: "Frontend Developer"
    },
  }),
  getters: {
    getAuthor() {
      return this.author;
    },
  },
  actions: {},
  persist: {
    storage: persistedState.localStorage,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}