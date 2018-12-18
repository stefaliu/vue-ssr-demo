<template>
  <div class="content">
    <div class="content-box">
      <div class="navigation">
        <div class="title">{{ $t('navigation.post') }}</div>
        <router-link v-for="item in data" class="link" :key="item.type" :to="`/post/list/${item.type}`">
          <div class="menu-item" :index="item.type.toString()">
            {{ $t('post.types.' + item.resourceId) }}
          </div>
        </router-link>
      </div>
      <div class="post">
        <router-view :type="type"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/services/api'

export default {
  data () {
    return {
      data: [],
      loading: false,
      type: this.$route.params.type ? this.$route.params.type : (this.data && this.data.length > 0 ? this.data[0].type : 0)
    }
  },
  created () {
    this.getData()
  },
  // mounted () {
    // this.type = this.$route.params.type ? this.$route.params.type : (this.data.length > 0 ? this.data[0].type : 0)
    // this.$refs.menu.activeIndex = this.type
  // },
  watch: {
    '$route' (to, from) {
      this.updateActiveType()
    },
    'data' () {
      this.updateActiveType()
    }
  },
  methods: {
    getData () {
      this.loading = true
      API.postType.list().then(({data}) => {
        // console.log('response:', data)
        if (data.code === 200) {
          this.data = data.types
        } else {
          this.data = []
        }
      }).finally(() => this.loading = false)
    },
    updateActiveType () {
      // TODO 不需要单独处理
      this.type = this.$route.params.type ? this.$route.params.type : (this.data.length > 0 ? this.data[0].type : 0),
      this.$refs.menu.activeIndex = this.type
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  width: 100%;
}
.content .content-box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 1200px;
  margin: 23px 0;
}
.content-box .navigation {
  width: 230px;
  min-height: 454px;
  margin-right: 10px;
  padding: 10px 0px;
  border: 1px solid #e5e5e5;
  background-color: white;
}
.content-box .navigation .title {
  padding: 20px 30px;
  color: #05c0d1;
  font-size: 20px;
  text-align: left;
}
.content-box .navigation .menu {
  border-right: 0px;
}
.content-box .navigation .menu:not(.el-menu--collapse) {
}
.content-box .navigation .menu .link {
  text-decoration: none;
}
.content-box .navigation .menu .menu-item {
  /*border-top: 1px solid #e5e5e5;*/
}
.content-box .navigation .el-menu-item {
  height: 44px;
  padding-left: 30px !important;
  color: #a8a8a8;
  line-height: 44px;
  font-size: 16px;
}
.content-box .navigation .el-menu-item.is-active {
  color: #05c0d1;
}
.content-box .navigation .el-menu-item:hover {
  background-color: #e6fcfe;
  color: #05c0d1;
}
.content-box .post {
  width: 960px;
  border: 1px solid #e5e5e5;
  background-color: white;
}
</style>
