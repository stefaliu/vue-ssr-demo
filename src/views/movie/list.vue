<template>
  <router-link class="list" :to="'/movie/' + data.id">
    <div class="image">
      <img :src="data.images.large" />
    </div>
    <div class="content">
      <h1>{{data.title}}</h1>
      <div class="rating">豆瓣评分: <span>{{data.rating.average}}</span></div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  height: 200px;
  padding: 25px;
  margin: 0 25px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}
.list .image {
  height: 150px;
  width: 150px;
  overflow: hidden;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list .image img {
  width: 100%;
}
.list .content {
  align-self: flex-start;
}
.list .content h1 {
  font-size: 20px;
}
</style>
