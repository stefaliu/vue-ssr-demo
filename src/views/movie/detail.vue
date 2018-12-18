<template>
  <div class="detail">
    <img :src="movieDetailData.images.large" />
    <div>影名: {{movieDetailData.title}}</div>
    <div>评分: {{movieDetailData.rating.average}}</div>
    <div>{{movieDetailData.summary}}</div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  asyncData ({store, route: {params: {movieId}}}) {
    return store.dispatch('ssr/fetchMovieItem', {
      movieId
    })
  },
  title () {
    return this.movieDetailData.title
  },
  computed: {
    movieDetailData () {
      return this.$store.state.detail
    }
  }
}
</script>

<style scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
}
</style>
