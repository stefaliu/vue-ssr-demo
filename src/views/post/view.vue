<template>
  <div class="box" v-loading="loading">
    <div class="title">{{ data.title }}</div>
    <div class="brief">
      <div class="text">{{ data.updateTime | formatDate }}　{{ data.updateUser }}</div>        
    </div>
    <div class="ql-editor content">
      <span v-html="data.content"></span>
    </div>
  </div>
</template>

<script>
import API from '@/services/api'

export default {
  data () {
    return {
      data: {},
      loading: false,
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      API.post.item(this.$route.params.id).then(({data}) => {
        // console.log('view data:', data)
        if (data.code === 200) {
          this.data = data.post
        } else {
          this.data = {}
        }
      }).finally(() => this.loading = false)
    },
  }
}
</script>

<style scoped>
.box {
  min-height: 490px;
  padding: 30px 41px;
}
.title {
  color: #4a4a4a;
  font-size: 24px;
}
.brief {
  margin: 10px 0px 20px;
  color: #4a4a4a;
  font-size: 15px;
  font-weight: 200;
}
.content {
  padding: 0;
  color: #4a4a4a;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 325;
  text-align: justify;
}
</style>
