/** 开发工具路由 */

import Layout from '@/layout'

const devRouter = {
    path: '/dev',
    component: Layout,
    name: 'Dev',
    meta: {
        title: '开发工具',
        icon: 'el-icon-s-cooperation',
    },

    children: [
        {
            name: "Dev_GenCode",
            path: "gen-code",
            component: () => import('@/views/dev/gen-code'),
            meta: {
                title: "代码生成",
                icon: "code",
                noCache: false
            },
        },
        {
            name: "Dev_IconLib",
            path: 'icon-lib',
            component: () => import('@/views/dev/icon-lib'),
            meta: {
                title: '图标库',
                icon: 'icon',
                noCache: true
            }
        },
        {
            name: "Dev_GenForm",
            path: "gen-form",
            component: () => import('@/views/dev/gen-form'),
            meta: {
                title: "表单生成",
                icon: "el-icon-s-order",
                noCache: false
            },
        },
    ]
}

export default devRouter
