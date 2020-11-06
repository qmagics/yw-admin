import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* 路由模块 */
import commonRouters from './modules/common';
import devRouter from './modules/dev';
import demoRouter from './modules/demo';
import testRouter from './modules/test';

/**
 * 路由对象属性说明
 * Note: 默认情况下 children.length >= 1 时才会出现子菜单
 *
 * hidden: true                   如果设置为true 则侧边栏不会显示改菜单（默认值 false）
 * alwaysShow: true               如果设置为true 则会一直显示根菜单
 *                                如果设置为false 当子菜单数量 <=1 时,不会显示根菜单（默认值 false）
 * redirect: noRedirect           如果设置为noRedirect 面包屑路径导航中点击不会重定向
 * name:'router-name'             name值会在<keep-alive>中使用，必须设置！
 * meta : {
    title: 'title'                值会在sidebar 和 breadcrumb 中显示 (建议设置)
    icon: 'svg-name'/'el-icon-x'  侧边栏中显示的图标（建议根级菜单必须设置）
    noCache: true                 如果设置为true 页面将不会被缓存 (默认值 false)
    affix: true                   如果设置为true 该页面页签会固定在tags-view，不能关闭 (默认值 false)
    breadcrumb: false             如果设置为false 该页面不会出现在面包屑路径导航中 (默认值 true)
    activeMenu: '/example/list'   如果设置了值 侧边栏会高亮选中你设置的页面路径对应的菜单
    juhe:true                     如果设置为true 该页面包含的子页面将会被聚合                         
    parentJuhe:true               与 juhe 属性配套使用 父路由中juhe为true时 子路由中parentJuhe必须设置为true(便于程序判断,减少计算量)          
  }
 */

/**
 * 固定路由
 * 没有权限要求，所有用户都可以访问
 */
export const constantRoutes = [
  ...commonRouters,

  devRouter,

  demoRouter,

  testRouter
]

const createRouter = () => new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

/**
 * 重置路由
 * 用户动态变更权限时调用(eg. 用户登出时 切换账号时)
 */
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
