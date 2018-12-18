<template>
  <div class="container">
    <list v-for="(data, index) in movieListData.subjects" :key="index" :data="data" />
  </div>
</template>

<script>
import List from './list'

export default {
  name: 'Index',
  data () {
    return {
      index: true
    }
  },
  asyncData ({store}) {
    console.log('async data', store)
    return store.dispatch('ssr/fetchMovieList', {
      start: 0,
      count: 20
    })
  },
  title () {
    return this.movieListData.title
  },
  components: {
    List
  },
  computed: {
    movieListData () {
      console.log(this.$store.state)
      return this.$store.state.ssr.movie.list
    }
  }
}
</script>

<style scoped>
.container {
  min-width: 500px;
}
</style>
