const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,

  /**
 * 根据完整路由地址获取父级路由对象
 * @param {*} fullPath 子路由完整路径 "/test/test1/test1-1"
 */
  getParentRouteByFullPath: (state) => (fullPath) => {
    if (!fullPath || typeof fullPath !== 'string' || !fullPath[0] === '/') {
      console.warn('fullPath格式不正确');
      return null;
    }

    let path_arr = fullPath.split('/'); //["", "test", "test1", "test1-1"]
    path_arr.shift(); //["test", "test1", "test1-1"]
    path_arr.pop(); //["test", "test1"]

    if (path_arr.length <= 0) return null;

    const parentRoute = path_arr.reduce((pre, cur, index) => {
      const item = pre.find((i) => i.path === cur || i.path === '/' + cur);

      if (index < path_arr.length - 1) {
        return item.children;
      } else {
        return item;
      }
    }, state.permission.routes);

    return parentRoute;
  }
}
export default getters
