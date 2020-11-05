/** 开发工具路由 */

import Layout from '@/layout'

const devRouter = {
    path: '/dev',
    component: Layout,
    meta: {
        title: '开发工具',
        icon: 'el-icon-s-cooperation',
    },

    children: [
        {
            name: "IconLib",
            path: 'icon-lib',
            component: () => import('@/views/dev/icon-lib'),
            meta: {
                title: '图标库',
                icon: 'icon',
            }
        },
        {
            name: "GenForm",
            path: "gen-form",
            component: () => import('@/views/dev/gen-form'),
            meta: {
                title: "表单生成",
                icon: "el-icon-s-order",
            },
        },
        {
            name: "GenCode",
            path: "gen-code",
            component: () => import('@/views/dev/gen-code'),
            meta: {
                title: "代码生成",
                icon: "code",
            },
        }
    ]
}

export default devRouter
