<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>
body, html {
  width: 100%;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  color: #4a4a4a;
  font-family: "PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑","Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 14px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
img {
  border: 0px;
}
a {
  color: #05c0d1;
  text-decoration: none;
  cursor: pointer;
}
a:hover {
  color: #05b7c7;
  text-decoration: underline;
}
:focus {
  outline: none;
}
::-moz-focus-inner {
  border: 0;
}
</style>
