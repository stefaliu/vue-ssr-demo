import Vue from 'vue'
import App from './App'
// import { sync } from 'vuex-router-sync'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// const ElementUI = require('element-ui')
// import '../theme/index.css'
// import '@/libs/icon-svg'
// import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

import { createStore } from '@/store'
import { createRouter } from '@/router'
import { createI18n } from '@/services/i18n'

import http from '@/services/http'
// import titleMixin from '@/services/ssr/title'
// import * as filters from '@/utils/filter'

// console.log('site config:', window.SITE_CONFIG)

console.log('test - in')

const { a, b } = { a: 1, b: 2 };
const c = [1,2,3]
const d = [...c, 4, 5]

console.log('test - out')

// Common
// Vue.use(ElementUI)

Vue.prototype.$http = http
Vue.config.productionTip = false

// Application-specific
// Vue.mixin(titleMixin)

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

// if (process.env.NODE_ENV !== 'production') {
//   require('@/services/mock')
// }

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  console.log('test2 - in')

  const { a, b } = { a: 1, b: 2 };
  const c = [1,2,3]
  const d = [...c, 4, 5]

  console.log('test2 - out')

  // create store and router instances
  const store = createStore()
  const i18n = createI18n(store)
  const router = createRouter(store, i18n)

  // sync the router with the vuex store.
  // this registers `store.state.route`
  // sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    // el: '#app',
    router,
    store,
    i18n,
    // components: { App },
    // template: '<App/>'
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store, i18n }
}
