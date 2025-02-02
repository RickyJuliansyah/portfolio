import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'AboutMe',
            component: () => import('../page/AboutMe.vue')
        },
        {
            path: '/work-experience',
            name: 'work-experience',
            component: () => import('../page/WorkExperience.vue')
        }
    ]
})

export default router