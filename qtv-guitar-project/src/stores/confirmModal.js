import { TIME_CONFIRM_MODAL } from "@/utils/constantValue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("confirmModal", {
  state: () => {
    return {
      isOpen: false,
      dangerMode: false,
      message: "",
    };
  },
  actions: {
    openModal(message, dangerMode = false, callback = () => {}) {
      this.isOpen = true;
      this.message = message;
      this.dangerMode = dangerMode;
      if (!dangerMode) {
        setTimeout(() => {
          callback();
        }, TIME_CONFIRM_MODAL);
      }
    },
    closeModal() {
      this.isOpen = false;
      this.message = "";
      this.dangerMode = false;
    },
  },
});
