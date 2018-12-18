import http from '@/services/http'

const MOVIE_API_URL = 'https://api.douban.com/v2'

export function getMovieList (start = 0, count = 20) {
  return http({
    url: http.getRequestUrl(`${MOVIE_API_URL}/movie/top250`),
    method: 'get',
    params: http.getRequestParams({
      start: start,
      count: count
    })
  })
}

export function getMovieItem (id) {
  return http({
    url: http.getRequestUrl(`${MOVIE_API_URL}/movie/detail`),
    method: 'get',
    params: http.getRequestParams({
      id: id
    })
  })
}
