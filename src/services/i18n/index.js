import Vue from 'vue'
// import store from '@/store'
// import { store } from '@/core-data'
import I18n from 'vue-i18n'

Vue.use(I18n)

// Supported languages
const supportedLanguages = {
  'zh-CN': require('@/assets/lang/zh-CN'),
  'en-US': require('@/assets/lang/en-US'),
}

// Set initial locale
export function createI18n (store) {
  let locale = store.state.system.locale
  if (!locale && process.env.VUE_ENV !== 'server') {
    locale = window.navigator.userLanguage || window.navigator.language
  }
  if (!locale || Object.keys(supportedLanguages).indexOf(locale) < 0) {
    locale = Object.keys(supportedLanguages)[0]
  }
  if (locale != store.state.system.locale) {
    store.commit('system/setLocale', locale)  
  }

  return new I18n({
    locale: locale,
    messages: supportedLanguages
  })
}
