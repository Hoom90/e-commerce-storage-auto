// Utilities
import { defineStore } from "pinia";

export const appStore = defineStore("app", {
  state: () => ({
    breadcrumbs: [],
    pageTitle: {
      title: "داشبورد",
      to: "/account",
    },
    options: [],
    token: null,
  }),
  getters: {
    getBreadCrumbs: (state) => {
      return state.breadcrumbs;
    },
    getPageTitle: (state) => {
      return state.pageTitle;
    },
    getOptions: (state) => {
      return state.options;
    },
    getAuth: (state) => {
      return state.token ? true : false;
    },
  },
  actions: {
    setBreadCrumbs(breadcrumbs) {
      this.breadcrumbs = breadcrumbs;
    },
    setPageTitle(pageTitle) {
      this.pageTitle = pageTitle;
    },
    setOptions(options) {
      this.options = options;
    },
    setToken(token) {
      this.token = token;
    },
  },
});
