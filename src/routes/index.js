import { createRouter, createWebHashHistory } from 'vue-router';
import { nextTick } from 'vue';

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
    ],
    scrollBehavior(to, from, savedPosition) {
        return nextTick().then(() => ({ left: 0, top: 0 }));
    }
})

export default router