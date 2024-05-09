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
    },
    {
        path: '/stray',
        name: 'stray',
        component: () => import('@/pages/Stray.vue')
    },
    {
        path: '/hyper',
        name: 'hyper',
        component: () => import('@/pages/Hyper.vue')
    },
    {
        path: '/transit',
        name: 'transit',
        component: () => import('@/pages/Transit.vue')
    },
    {
        path: '/arcane',
        name: 'arcane',
        component: () => import('@/pages/Arcane.vue')
    },
    {
        path: '/nebula',
        name: 'nebula',
        component: () => import('@/pages/Nebula.vue')
    },
    {
        path: '/angine',
        name: 'angine',
        component: () => import('@/pages/Angine.vue')
    },
    {
        path: '/:pathName(.*)',
        name: 'notFound',
        component: () => import('@/pages/NotFound.vue')
    }
]

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

export default router