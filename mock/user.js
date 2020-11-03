
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    "permissions": [
      "*:*:*",
    ],

    "roles": [
      "admin",
      "common"
    ],

    "user": {
      "userName": "admin",
      "userId": "@guid",
      "sex": "1",
      "remark": "管理员",
      "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    },

    "dept": {
      "deptName": "研发部"
    }
  },
  'editor-token': {
    "permissions": [
      "system:user:list",
      "system:user:add"
    ],

    "roles": [
      "editor"
    ],

    "user": {
      "userName": "编辑者",
      "userId": "@guid",
      "sex": "2",
      "remark": "普通用户",
      "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    },

    "dept": {
      "deptName": "销售部"
    }
  }
}

module.exports = [
  // 用户登录
  {
    url: '/api/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 602,
          message: '账号或密码不正确'
        }
      }

      return {
        code: 200,
        data: token
      }
    }
  },

  // 获取用户信息
  {
    url: '/api/profile\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 508,
          msg: '登录失败，无法获取用户信息'
        }
      }

      return {
        code: 200,
        data: info
      }
    }
  },

  // 用户登出
  {
    url: '/api/logout',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
