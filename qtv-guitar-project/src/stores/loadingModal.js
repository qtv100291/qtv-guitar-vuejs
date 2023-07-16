import { defineStore } from "pinia";

export const useLoadingModalStore = defineStore("loadingModal", {
  state: () => {
    return {
      isLoadingOpen: false,
    };
  },
  actions: {
    openLoadingModal() {
      this.isLoadingOpen = true;
    },
    closeLoadingModal() {
      this.isLoadingOpen = false;
    },
  },
});
