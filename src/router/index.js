import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('../views/home/home')
const category = () => import('../views/category/category')
const carts = () => import('../views/carts/carts')
const profile = () => import('../views/profile/profile')
const detail = () => import("../views/detail/detail")


Vue.use(VueRouter)
// Vue.use(Router)

const routes = [
    {
        path:'/',
        component:home
    },
    {
        path:'/home',
        component:home
    },
    {
        path:'/category',
        component:category
    },
    {
        path:'/carts',
        component:carts
    },
    {
        path:'/profile',
        component:profile
    },
    {
        // 动态路由
        path:'/detail/:id',
        component:detail 
    }
]

const router = new VueRouter({
    routes,
    modes:'history'
})

export default router 