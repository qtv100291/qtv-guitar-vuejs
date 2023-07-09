import { defineStore } from "pinia";

export const useAuthentication = defineStore("authentication", {
  state: () => {
    return {
      isLogged: false,
      userInfo: {},
    };
  },
  getters: {
    isLogged: (state) => {
      return state.isLogged;
    },
    getUserInfo: (state) => {
      return state.userInfo;
    },
  },
  actions: {
    setLogin: (info) => {
      this.isLogged = true;
      this.userInfo = { ...info };
    },
    setLogout: () => {
      this.isLogged = false;
      this.userInfo = {};
    },
  },
});
