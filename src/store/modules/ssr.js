import API from '@/services/api'

const state = {
  movie: {
    list: {},
    item: {}
  }
}

const mutations = {
  setMovieList: (state, { data }) => {
    state.movie.list = data
  },
  setMovieItem: (state, { data }) => {
    state.movie.item = data
  }
}

const actions = {
  fetchMovieList: ({ commit }, { start, count }) => {
    console.log('fetch movie list action:', commit)
    return API.movie.getMovieList(start, count).then(({data}) => {
      console.log('data:', data)
      commit('setMovieList', { data })
    })
  },
  fetchMovieItem: ({ commit }, { id }) => {
    return API.movie.getMovieItem(id).then(({data}) => {
      console.log('data:', data)
      commit('setMovieItem', { data })
    })
  }
}

export default {
  namespaced: true,
  state,
  // getters,
  mutations,
  actions
}
