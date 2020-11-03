import request from '@/utils/request'

// 获取菜单路由
export const getRoutes = () => {
  return request({
    url: '/api/routes',
    method: 'get'
  })
}