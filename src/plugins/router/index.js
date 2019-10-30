import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        redirect: '/home/msg'
    },
    {
        path: '/home',
        component: () =>
            import ('../../views/Home.vue'),
        children: [{
            name: 'friend',
            path: 'friend',
            component: () =>
                import ('../../components/Friend.vue')
        }, {
            path: 'msg',
            name: 'msg',
            component: () =>
                import ('../../components/Msg.vue')
        }, {
            path: 'setting',
            name: 'setting',
            component: () =>
                import ('../../components/Setting.vue')
        }]
    },
    {
        path: '/login',
        component: () =>
            import ('../../views/Login.vue')
    },
    {
        path: '/regist',
        component: () =>
            import ('../../views/Regist.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router