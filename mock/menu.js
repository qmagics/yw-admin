
module.exports = [
    // 获取菜单路由
    {
        url: '/api/routes',
        type: 'get',
        response: _ => {
            return {
                code: 200,
                data: [
                    {
                        "name": "System",
                        "path": "/system",
                        "component": "Layout",
                        "redirect": "noRedirect",
                        "meta": {
                            "icon": "el-icon-s-tools",
                            "title": "系统管理",
                            "noCache": false
                        },
                        "children": [{
                            "name": "Menu",
                            "path": "menu",
                            "component": "system/menu",
                            "meta": {
                                "icon": "el-icon-menu",
                                "title": "菜单管理",
                                "noCache": false
                            }
                        },
                        {
                            "name": "Permission",
                            "path": "permission",
                            "component": "system/permission",
                            "meta": {
                                "icon": "el-icon-menu",
                                "title": "权限管理",
                                "noCache": false
                            }
                        }
                        ]
                    }
                ]
            }
        }
    }
]
