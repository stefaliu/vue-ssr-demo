var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var path = require('path');
var del  = require('del');
var exec = require('child_process').exec;

var distPath    = path.resolve('./dist');
var version     = '';
var targetPath = '';
var env         = '';

// Create version (in YYYYMMDDHHMM format)
(function () {
  var d = new Date();
  var yy = d.getFullYear().toString().slice(2);
  var MM = d.getMonth() + 1 >= 10 ? (d.getMonth() + 1) : '0' + (d.getMonth() + 1);
  var DD = d.getDate() >= 10 ? d.getDate() : '0' + d.getDate();
  var h  = d.getHours() >= 10 ? d.getHours() : '0' + d.getHours();
  var mm = d.getMinutes() >= 10 ? d.getMinutes() : '0' + d.getMinutes();
  version = yy + MM + DD + h + mm;
  // targetPath = distPath + '/' + version;
  targetPath = distPath;
})();

// Clean target folder
gulp.task('clean', function () {
  return del([targetPath])
});

// Set env
gulp.task('env', function (done) {
  env = process.env.npm_config_qa ? 'qa' : process.env.npm_config_uat ? 'uat' : process.env.npm_config_production ? 'prod' : 'dev'
  done()
});

// Build app
gulp.task('build', $.shell.task([ 'npm run build:system' ]));

// Build app
// gulp.task('build', function () {
//   let command, index = process.argv.indexOf("--command");
//   if (index >= 0) {
//     command = process.argv[index + 1]
//   }
//   console.log(command)
//   // exec('cmd', command)
//   $.shell.task([ 'node build/build.js' ])
//   // done()
// });

// Create target folder and copy built app files into it
// gulp.task('create:versionCatalog', function () {
//   return gulp.src(`${distPath}/static/**/*`)
//     .pipe(gulp.dest(`${targetPath}/static/`))
// });

// Replace all asset paths with window.SITE_CONFIG.cdnUrl placeholder in ${targetPath}/static/js/manifest.js
// gulp.task('replace:cdnUrl', function () {
//   return gulp.src(`${targetPath}/static/js/manifest.js`)
//     .pipe($.replace(new RegExp(`"${require('./config').build.assetsPublicPath}"`, 'g'), 'window.SITE_CONFIG.cdnUrl + "/"'))
//     .pipe(gulp.dest(`${targetPath}/static/js/`))
// });

// Replace window.SITE_CONFIG['version'] in ${targetPath}/static/config/index-${env}.js
gulp.task('replace:version', function () {
  return gulp.src(`${targetPath}/static/config/index-${env}.js`)
    .pipe($.replace(/window.SITE_CONFIG\['version'\] = '.*'/g, `window.SITE_CONFIG['version'] = '${version}'`))
    .pipe(gulp.dest(`${targetPath}/static/config/`))
});

// Concat ${targetPath}/static/config/[index-${env}, init].js into ${distPath}/config/index.js
gulp.task('concat:config', function () {
  return gulp.src([`${targetPath}/static/config/index-${env}.js`, `${targetPath}/static/config/init.js`])
    .pipe($.concat('index.js'))
    .pipe(gulp.dest(`${distPath}/config/`))
});

// Main task scheduling
// gulp.task('default', gulp.series('clean', 'env', 'build', 'create:versionCatalog', gulp.parallel('replace:cdnUrl', gulp.series('replace:version', 'concat:config')), function cleanup (done) {
//   // Remove original built app files
//   del([`${distPath}/static`, `${targetPath}/static/config`])
//   done()
// }));

// Main task scheduling
gulp.task('default', gulp.series('clean', 'env', 'build', gulp.series('replace:version', 'concat:config'), function cleanup (done) {
  // Remove original built app files
  del([`${targetPath}/static/config`])
  done()
}));
