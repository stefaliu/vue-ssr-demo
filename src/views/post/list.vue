<template>
  <div class="box">
    <div class="list" v-loading="loading">
      <div v-for="(item, index) in data" :key="index">
        <div @click="view(item.id)"><span class="prefix">•</span><span class="title">{{ item.title }}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/services/api'

export default {
  props: {
    type: {
      // type: String,
      required: true
    }    
  },
  data () {
    return {
      data: [],
      loading: false,
      pageSize: 10,
      pageIndex: 1,
      totalCount: 0,
    }
  },
  watch: {
    type: function () {
      this.getData()
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      let params = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        type: this.type
      }
      // console.log('params:', params)
      API.post.list(params).then(({data}) => {
        // console.log('list data:', data)
        if (data.code === 200) {
          this.data = data.posts.list
          this.totalCount = data.posts.totalCount
        } else {
          this.data = []
          this.totalCount = 0
        }
      }).finally(() => this.loading = false)
    },
    onCurrentChange (value) {
      this.pageIndex = value
      this.getData()
    },
    view (id) {
      this.$router.push({
        name: 'post-view',
        params: {
          type: this.type,
          id: id
        }
      })
    }
  }
}
</script>

<style scoped>
.box {
  min-height: 490px;
  padding: 30px 31px;
}
.list {
  margin-bottom: 25px;
  color: #4a4a4a;
  font-size: 16px;
}
.list .prefix {
  margin-right: 11px;
  font-family: Arial;
  color: #05c0d1;
  cursor: pointer;
}
.list .title {
  color: #4a4a4a;
  cursor: pointer;
}
.list .title:hover {
  color: #05c0d1;
  text-decoration: underline;
}
.list .time {
  font-size: 15px;
  font-weight: 200;
}
.pager {
  text-align: center;
}
</style>
