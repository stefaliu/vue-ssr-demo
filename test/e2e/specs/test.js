// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .assert.elementPresent('#app')
      // .waitForElementVisible('#app', 5000)
      // .assert.elementPresent('.header')
      // .assert.elementPresent('.footer')
      // .assert.containsText('h1', 'Welcome to Your Vue.js App')
      // .assert.elementCount('img', 1)
      .end()
  }
}
