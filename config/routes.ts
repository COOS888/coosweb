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
  }, // {
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
        name: 'analysis',
        icon: 'smile',
        path: '/dashboard/dashboardanalysis',
        component: './Dashboard/DashboardAnalysis',
      },
      {
        name: 'monitor',
        icon: 'smile',
        path: '/dashboard/dashboardmonitor',
        component: './Dashboard/DashboardMonitor',
      },
      {
        name: 'workplace',
        icon: 'smile',
        path: '/dashboard/dashboardworkplace',
        component: './Dashboard/DashboardWorkplace',
      },
    ],
  },
  {
    path: '/member',
    name: '会员管理',
    icon: 'crown',
    routes: [
      {
        name: '会员列表',
        icon: 'table',
        path: '/member/member/list',
        component: './Member/Member_List',
      },
      {
        name: '会员等级',
        icon: 'table',
        path: '/member/memberLevel/list',
        component: './Member/Member_Level',
      },
      {
        name: '会员地址',
        icon: 'table',
        path: '/member/memberAddress/list',
        component: './Member/Member_Address',
      },
      {
        name: '登录记录',
        icon: 'table',
        path: '/member/memberLoginLog/list',
        component: './Member/Member_Login_Log',
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
        path: '/editor/editorflow',
        component: './Editor/EditorFlow',
      },
      {
        name: 'koni',
        icon: 'smile',
        path: '/editor/editorkoni',
        component: './Editor/EditorKoni',
      },
      {
        name: 'mind',
        icon: 'smile',
        path: '/editor/editormind',
        component: './Editor/EditorMind',
      },
    ],
  }, // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  //   hideInMenu: true
  // },
  {
    path: '/',
    redirect: '/welcome',
  }, // {
  //   name: '流程编辑器',
  //   icon: 'smile',
  //   path: '/~docs/editorflow',
  //   component: './Editor/EditorFlow',
  // },
  {
    component: './404',
  },
];
