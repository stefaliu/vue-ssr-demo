import Vue from 'vue'
import Router from 'vue-router'

// import i18n from '@/services/i18n'
// import store from '@/store'
// const store = require('@/core-data').store

// Only enables lazy loading in production mode, for that too many lazy loading would slow down webpack hot updating
const _import = require('./import-' + process.env.NODE_ENV)

Vue.use(Router)

export function createRouter (store, i18n) {
  let router = new Router({
    mode: 'history',
    base: '/',
    routes: [
      { path: '/home', alias: '/', name: 'home', component: _import('home/index'), meta: { title: '首页' } },
      // Post
      { path: '/post', name: 'post', component: _import('post/index'),
        children: [
          { path: 'list/:type?', alias: '', name: 'post-list', component: _import('post/list'), meta: { title: '资讯 - 列表' } },
          { path: 'item/:type/:id', name: 'post-view', component: _import('post/view'), meta: { title: '资讯 - 内容' } }
        ]
      },
      // Movie
      { path: '/movie', name: 'movie-list', component: _import('movie/index'), meta: { title: '电影 - 列表' } },
      { path: '/movie/:movieId', name: 'movie-detail', component: _import('movie/detail'), meta: { title: '电影 - 详情' } },
    ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  })

  return router
}
