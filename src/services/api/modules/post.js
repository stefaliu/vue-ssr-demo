import http from '@/services/http'

export function list (params) {
  return http({
    url: http.getRequestUrl('/post/list'),
    method: 'get',
    params: http.getRequestParams(params)
  })
}

export function item (id) {
  return http({
    url: http.getRequestUrl(`/post/item/${id}`),
    method: 'get'
  })
}

export function add (params) {
  return http({
    url: http.getRequestUrl('/post/add'),
    method: 'post',
    data: http.getRequestData(params)
  })
}

export function update (params) {
  return http({
    url: http.getRequestUrl('/post/update'),
    method: 'post',
    data: http.getRequestData(params)
  })
}

export function remove (params) {
  return http({
    url: http.getRequestUrl('/post/delete'),
    method: 'post',
    data: http.getRequestData(params)
  })
}
