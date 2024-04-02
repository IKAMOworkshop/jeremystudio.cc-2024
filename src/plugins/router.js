import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/About.vue')
    },
    {
        path: '/insights',
        name: 'insights',
        component: () => import('@/pages/Insights.vue')
    },
    {
        path: '/archives',
        name: 'archives',
        component: () => import('@/pages/Archives.vue')
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router