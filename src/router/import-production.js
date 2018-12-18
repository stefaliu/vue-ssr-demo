// Lazy loading routes
module.exports = file => () => import('@/views/' + file + '.vue')
