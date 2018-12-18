/**
 * 验收环境
 */
;(function () {
  window.SITE_CONFIG = {};

  // 环境标识
  window.SITE_CONFIG['env']  = 'uat';

  // API接口请求地址
  window.SITE_CONFIG['baseUrl'] = 'TBD';

  // CDN地址 = 域名 + 版本号
  window.SITE_CONFIG['domain']  = ''; // 域名
  window.SITE_CONFIG['version'] = '';   // 版本号(年月日时分)
  window.SITE_CONFIG['cdnUrl']  = window.SITE_CONFIG.domain;

  // 统计资源标识
  window.SITE_CONFIG['analyticsId']  = 'TBD';
})();
