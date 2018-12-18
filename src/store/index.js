import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import system from './modules/system'
import ssr from './modules/ssr'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      system,
      ssr
    },
    plugins: (process.env.VUE_ENV === 'server') ? [] : [
      createPersistedState({
        paths: [ 'system' ]
      })
    ],
    strict: process.env.NODE_ENV !== 'production'
  })
}
