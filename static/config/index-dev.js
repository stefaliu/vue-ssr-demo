/**
 * 开发环境
 */
;(function () {
  // console.log('vue env:', process.env.VUE_ENV)
  // if (process.env.VUE_ENV === 'server') {
  //   global.window = {}
  // }
  // console.log('window', window)

  window.SITE_CONFIG = {};

  // 环境标识
  window.SITE_CONFIG['env']  = 'dev';

  // API接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'http://server.takken.cn:8800/takken-server-dev';

  // CDN地址 = 域名 + 版本号
  window.SITE_CONFIG['domain']  = ''; // 域名
  window.SITE_CONFIG['version'] = '';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain;

  // 统计资源标识
  window.SITE_CONFIG['analyticsId']  = 'UA-127459227-7';
})();
