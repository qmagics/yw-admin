import Layout from '@/layout';

const demoRouter = {
    path: '/demo',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
        title: '开发样例',
        icon: 'el-icon-s-opportunity'
    },
    children: [
        {
            path: 'table',
            component: () => import('@/views/demos/table'),
            redirect: 'noRedirect',
            name:'Demo_Table',
            meta: { title: 'Table', icon: 'table' },
            children: [
                {
                    path: 'base-table',
                    name: 'Demo_Table_BaseTable',
                    component: () => import('@/views/demos/table/base-table'),
                    meta: { title: '基础表格' }
                },
                {
                    path: 'drag-table',
                    name: 'Demo_Table_DragTable',
                    component: () => import('@/views/demos/table/drag-table'),
                    meta: { title: '拖拽表格' }
                },
                {
                    path: 'inline-edit-table',
                    name: 'Demo_Table_InlineEditTable',
                    component: () => import('@/views/demos/table/inline-edit-table'),
                    meta: { title: '简单行内编辑' }
                }
            ]
        },
        {
            path: 'tinymce',
            name: 'Demo_Tinymce',
            component: () => import('@/views/demos/components-demo/tinymce'),
            meta: { title: 'Tinymce', icon: 'editor' }
        },
        {
            path: 'markdown',
            name: 'Demo_Markdown',
            component: () => import('@/views/demos/components-demo/markdown'),
            meta: { title: 'Markdown', icon: 'markdown' }
        },
        {
            path: 'excel',
            name: 'Demo_Excel',
            component: () => import('@/views/demos/excel'),
            redirect: 'noRedirect',
            meta: { title: 'Excel 操作', icon: 'excel' },
            children: [
                {
                    path: 'export-excel',
                    name: 'Demo_Excel_ExportExcel',
                    component: () => import('@/views/demos/excel/export-excel'),
                    meta: { title: 'Excel 导出' }
                },
                {
                    path: 'upload-excel',
                    name: 'Demo_Excel_UploadExcel',
                    component: () => import('@/views/demos/excel/upload-excel'),
                    meta: { title: 'Excel 导入' }
                },
                {
                    path: 'select-excel',
                    name: 'Demo_Excel_SelectExcel',
                    component: () => import('@/views/demos/excel/select-excel'),
                    meta: { title: 'Excel 选择导出' }
                },
                {
                    path: 'merge-header',
                    name: 'Demo_Excel_MergeHeader',
                    component: () => import('@/views/demos/excel/merge-header'),
                    meta: { title: '表头合并导出' }
                }
            ]
        },
        {
            path: 'zip',
            name: 'Demo_Zip',
            component: () => import('@/views/demos/zip'),
            meta: { title: 'Zip 操作', icon: 'zip' }
        }
    ]
}

export default demoRouter
