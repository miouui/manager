import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/mokuai.vue'),
            }, {
                path: '/shuizhi',
                name: 'baseshuizhi',
                meta: {
                    title: '实验室1-传感器3-水质',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/shuizhi.vue'),
            },{
                path: '/chuanganqi',
                name: 'basechuanganqi',
                meta: {
                    title: '传感器1',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/chuanganqi.vue'),
            },{
                path: '/dianliu1',
                name: 'basedianliu1',
                meta: {
                    title: '实验室2电流',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/dianliu1.vue'),
            },{
                path: '/mokuai',
                name: 'basemokuai',
                meta: {
                    title: '实验室1',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/mokuai.vue'),
            },{
                path: '/mokuai1',
                name: 'basemokuai1',
                meta: {
                    title: '实验室2',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/mokuai1.vue'),
            },{
                path: '/dianya',
                name: 'basedianya',
                meta: {
                    title: '实验室1-传感器1-电参表',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/dianya.vue'),
            },{
                path: '/liuliang',
                name: 'baseliuliang',
                meta: {
                    title: '实验室1-传感器4-流量',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/dianya.vue'),
            },{
                path: '/dianya1',
                name: 'basedianya1',
                meta: {
                    title: '实验室2电压',
                    permiss: '15',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/dianya1.vue'),
            },
            {
                path: '/icon',
                name: 'icon',
                meta: {
                    title: '自定义图标',
                    permiss: '10',
                },
                component: () => import(/* webpackChunkName: "icon" */ '../views/icon.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

router.afterEach(() => {
    NProgress.done()
})

export default router;
