// Utilities
import { defineStore } from 'pinia'

export const appStore = defineStore('app', {
  state: () => ({
    breadcrumbs: [],
    token:null,
  }),
  getters:{
    getBreadCrumbs: (state) => {
      return [{
          title: 'کنترل پنل',
          to: '/account'
      },
      ...state.breadcrumbs]
    },
    getAuth: (state) => {
      return state.token ? true : false
    }
  },
  actions: {
    setBreadCrumbs(breadcrumbs) {
        this.breadcrumbs = breadcrumbs
    },
    setToken(token) {
      this.token = token
    }
  }
})