import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        redirect: '/money'
    },
    {
        path: '/money',
        name: 'Money',
        component: Money
    },
    {
        path: '/labels',
        name: 'Labels',
        component: Labels
    },
    {
        path: '/statistics',
        name: 'Statistics',
        component: Statistics
    }, {
        path: '*',
        component: NotFound
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;
//# sourceMappingURL=index.js.map