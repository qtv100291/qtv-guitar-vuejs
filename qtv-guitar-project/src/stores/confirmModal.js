import { defineStore } from "pinia";

export const useModalStore = defineStore("confirmModal", {
  state: () => {
    return {
      isOpen: false,
    };
  },
  actions: {
    openModal(modalState) {
      console.log("modal store", this.isOpen);
      this.isOpen = modalState;
    },
  },
});
