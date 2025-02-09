import { createRouter, createWebHashHistory } from 'vue-router'
import { IStaticMethods } from "preline/preline";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'AboutMe',
            component: () => import('@/pages/AboutMe.vue').catch(err => console.error("Import error:", err))

        },
        {
            path: '/work-experience',
            name: 'work-experience',
            component: () => import('@/pages/WorkExperience.vue')
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: () => import('@/pages/Portfolio.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('@/pages/Contact.vue')
        },
        {
            path: '/detail-project/:id',
            name: 'detail-project',
            component: () => import('@/pages/DetailProject.vue')
        }
    ]
})

export default router