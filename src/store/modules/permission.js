import { getRoutes } from '@/api/menu'
import { constantRoutes } from '@/router'
import Layout from '@/layout/index'

// /**
//  * Use meta.role to determine if the current user has permission
//  * @param roles
//  * @param route
//  */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }

// /**
//  * Filter asynchronous routing tables by recursion
//  * @param routes asyncRoutes
//  * @param roles
//  */
// export function filterAsyncRoutes(routes, roles, parent) {
//   const res = []

//   routes.forEach(route => {
//     const tmp = { ...route }

//     if (hasPermission(roles, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRoutes(tmp.children, roles, tmp)
//       }
//       res.push(tmp)
//     }
//   })

//   return res
// }

/**
 * 把通过api获取到的路由数据转化为VueRouter可识别的路由对象
 * @param {*} asyncRoutesData 
 */
function parseRoutes(asyncRoutesData) {
  return asyncRoutesData.map(i => {
    const route = { ...i };

    if (i.component) {
      if (route.component === 'Layout') {
        route.component = Layout;
      }
      else {
        route.component = loadView(route.component);
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = parseRoutes(route.children)
    }

    return route;
  })
}

/**
 * 加载视图组件
 * @param {*} path 视图组件路径
 */
function loadView(path) {
  return (resolve) => require([`@/views/${path}`], resolve)
  // return () => import(`@/views/${path}`);
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
  generateRoutes({ commit }) {
    return new Promise((resolve) => {
      getRoutes()
        .then(res => {
          //路由对象转化
          const parsedRoutes = parseRoutes(res.data);

          //增加404页面路由(404页面路由必须放在路由数组的最后)
          parsedRoutes.push({ path: '*', redirect: '/404', hidden: true });

          //设置异步路由
          commit('SET_ROUTES', parsedRoutes);

          resolve(parsedRoutes);
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
