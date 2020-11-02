import { asyncRoutes, constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles, parent) {
  const res = [];

  routes.forEach(route => {
    const tmp = { ...route };

    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles, tmp);
      }

      // if(tmp.juhe){

      // }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }

      // console.log(accessedRoutes);
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  },

  // /**
  //  * 根据完整路由地址获取父级路由对象
  //  * @param {*} fullPath 子路由完整路径 "/test/test1/test1-1"
  //  */
  // getParentRouteByFullPath({ commit, state }, fullPath) {
  //   if (!fullPath || typeof fullPath !== 'string' || !fullPath[0] === '/') {
  //     console.warn('fullPath格式不正确');
  //     return null;
  //   }

  //   let path_arr = fullPath.split('/'); //["", "test", "test1", "test1-1"]
  //   path_arr.shift(); //["test", "test1", "test1-1"]
  //   path_arr.pop(); //["test", "test1"]

  //   if (path_arr.length <= 0) return null;

  //   const parentRoute = path_arr.reduce((pre, cur, index) => {
  //     const item = pre.find((i) => i.path === cur || i.path === '/' + cur);

  //     if (index < path_arr.length - 1) {
  //       return item.children;
  //     } else {
  //       return item;
  //     }
  //   }, state.routes);

  //   return parentRoute;
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}