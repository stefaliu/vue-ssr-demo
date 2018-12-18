import { createApp } from './main'

const { app, router, store, i18n } = (typeof window === 'undefined') ? {} : createApp()

export {
  app,
  router,
  store,
  i18n
}
