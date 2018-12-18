const state = {
  locale: ''
}

const getters = {
  locale: state => {
    return state.locale
  }
}

const mutations = {
  setLocale (state, locale) {
    state.locale = locale
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
