export const useGlobalStore = defineStore('global', {
  state: () => ({
    appName: 'Nuxt 3 Stater Project Template',
    theme: 'light',
  }),
  getters: {

  },
  actions: {

  },
  persist: {
    storage: persistedState.localStorage,
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}