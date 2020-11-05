/** 公共路由 */

import Layout from '@/layout'

const commonRouter = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/common/redirect/index')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/common/login/index'),
        hidden: true
    },
    {
        path: '/profile',
        component: Layout,
        redirect: '/profile/index',
        hidden: true,
        children: [
            {
                path: 'index',
                component: () => import('@/views/common/profile'),
                name: 'Profile',
                meta: { title: '用户信息', icon: 'user', noCache: false }
            }
        ]
    },
    {
        path: '/auth-redirect',
        component: () => import('@/views/common/login/auth-redirect'),
        hidden: true
    },
    {
        path: '/404',
        component: () => import('@/views/common/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/views/common/error-page/401'),
        hidden: true
    },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/dashboard/index'),
                name: 'Dashboard',
                meta: { title: '首页', icon: 'dashboard', affix: true }
            }
        ]
    },
]

export default commonRouter
