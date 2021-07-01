export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  // {
  //   path: '/admin',
  //   name: 'admin',
  //   icon: 'crown',
  //   access: 'canAdmin',
  //   component: './Admin',
  //   routes: [
  //     {
  //       path: '/admin/sub-page',
  //       name: 'sub-page',
  //       icon: 'smile',
  //       component: './Welcome',
  //     },
  //   ],
  // },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'crown',
    routes: [
      {
        name: '分析页',
        icon: 'smile',
        path: '/dashboard/analysis',
        component: './Dashboard/Analysis',
      },
      {
        name: '监控页',
        icon: 'smile',
        path: '/dashboard/monitor',
        component: './Dashboard/Monitor',
      },
      {
        name: '工作台',
        icon: 'smile',
        path: '/dashboard/workplace',
        component: './Dashboard/Workplace',
      },
    ],
  },
  {
    name: 'account',
    icon: 'user',
    path: '/account',
    routes: [
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './account/settings',
      },
      {
        name: 'center',
        icon: 'smile',
        path: '/welcome/center',
        component: './Account/Center',
      },
    ],
    hideInMenu: true
  },
  {
    path: '/member',
    name: '会员管理',
    icon: 'crown',
    routes: [
      {
        name: '会员列表',
        icon: 'table',
        path: '/member/list',
        component: './Member/List',
      },
      {
        name: '会员等级',
        icon: 'table',
        path: '/member/Level/list',
        component: './Member/Level',
      },
      {
        name: '会员地址',
        icon: 'table',
        path: '/member/address/list',
        component: './Member/Address',
      },
      {
        name: '登录记录',
        icon: 'table',
        path: '/member/LoginLog/list',
        component: './Member/Log',
      },
    ],
  }, 
  {
    path: '/system',
    name: '系统管理',
    icon: 'crown',
    routes: [
      {
        name: '用户列表',
        icon: 'table',
        path: '/system/user/list',
        component: './System/User',
      },
      {
        name: '角色列表',
        icon: 'table',
        path: '/system/role/list',
        component: './System/Role',
      },
      {
        name: '菜单列表',
        icon: 'table',
        path: '/system/menu/list',
        component: './System/Menu',
      },
      {
        name: '机构列表',
        icon: 'table',
        path: '/system/dept/list',
        component: './System/Dept',
      },
      {
        name: '字典列表',
        icon: 'table',
        path: '/system/dict/list',
        component: './System/Dict',
      },
      {
        name: '职位列表',
        icon: 'table',
        path: '/system/job/list',
        component: './System/Job',
      },
    ],
  },
  {
    path: '/editor',
    name: 'editor',
    icon: 'crown',
    routes: [
      {
        name: 'flow',
        icon: 'smile',
        path: '/editor/flow',
        component: './Editor/Flow',
      },
      {
        name: 'koni',
        icon: 'smile',
        path: '/editor/koni',
        component: './Editor/Koni',
      },
      {
        name: 'mind',
        icon: 'smile',
        path: '/editor/mind',
        component: './Editor/Mind',
      },
    ],
  }, 
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  //   hideInMenu: true
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
