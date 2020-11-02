/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const testRouter = {
  path: '/test',
  component: Layout,
  redirect: '/test/test1',
  name: 'Test',
  meta: {
    title: '测试菜单',
    icon: 'qq',
    fullPath: '/test'
  },
  children: [
    {
      path: 'test1',
      name: 'Test1',
      // 聚合路由使用这个layout
      component: () => import('@/views/juhe'),
      redirect: '/test/test1/test1-1',
      meta: {
        title: '测试1',
        juhe: true,
        fullPath: '/test/test1'
      },
      children: [
        {
          path: 'test1-1',
          name: 'Test1-1',
          component: () => import('@/views/test/test1/subs/test1-1'),
          hidden: true,
          meta: {
            title: '测试1-1',
            icon: 'el-icon-grape',
            parentJuhe: true,
            fullPath: '/test/test1/test1-1'
          }
        },
        {
          path: 'test1-2',
          name: 'Test1-2',
          component: () => import('@/views/test/test1/subs/test1-2'),
          hidden: true,
          meta: {
            title: '测试1-2',
            icon: 'el-icon-watermelon',
            parentJuhe: true,
            fullPath: '/test/test1/test1-2'
          }
        }
      ]
    },
    {
      path: 'test2',
      name: 'Test2',
      component: () => import('@/views/test/test2'),
      redirect: '/test/test2/test2-1',
      meta: {
        title: '测试2'
      },
      children: [
        {
          path: 'test2-1',
          name: 'Test2-1',
          component: () => import('@/views/test/test2/subs/test2-1'),
          meta: {
            title: '测试2-1'
          }
        },
        {
          path: 'test2-2',
          name: 'Test2-2',
          component: () => import('@/views/test/test2/subs/test2-2'),
          meta: {
            title: '测试2-2'
          }
        }
      ]
    }
    // {
    //     path: 'test1',
    //     // component: () => import('@/views/test/index.vue'),
    //     component: () => import('@/views/test/subs/sub1.vue'),
    //     name: 'test1',
    //     meta: { title: 'Test1', noCache: true }
    // },
    // {
    //     path: 'test2',
    //     component: () => import('@/views/test/subs/sub2.vue'),
    //     name: 'test2',
    //     meta: { title: 'Test2', noCache: true }
    // },
  ]
}

export default testRouter
