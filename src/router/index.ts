import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
const Home = () => import('views/Home/Home.vue');

Vue.use(VueRouter)
// 解决重复点击相同路由控制台报错
const originalPush: any = VueRouter.prototype.push;
VueRouter.prototype.push = (location: Function) => {
  return originalPush.call(this, location).catch((err: any) => err)
}
const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ 'views/About.vue')
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next) => {
  // console.log(to,form);
  next();
})

export default router
