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
                icon: "el-icon-s-cooperation",
                noCache: false
            },
        },
        {
            name: "Dev_Icons",
            path: 'icons',
            component: () => import('@/views/dev/icons'),
            meta: {
                title: '图标库',
                icon: 'icon',
                noCache: true
            }
        }
    ]
}

export default devRouter
