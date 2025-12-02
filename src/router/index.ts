import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'
const Layout = { template: '<router-view />' } // 只有 router-view，为了渲染子路由
const EmptyPage = { template: '<div>这里是页面内容</div>' }

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: { title: '首页' }, // 面包屑要读这个 title
    children: [
      {
        path: 'dashboard',
        component: EmptyPage,
        meta: { title: '控制台' }
      },
      {
        path: 'system',
        component: Layout, // 这是一个父级菜单
        meta: { title: '系统管理' },
        children: [
          {
            path: 'user',
            component: EmptyPage,
            meta: { title: '用户列表' }
          },
          {
            path: 'role',
            component: EmptyPage,
            meta: { title: '角色列表' }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router