import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        redirect: '/home/contentHTML'
    },
    {
        path: '/home/contentHTML',
        redirect: '/home/contentHTML/Setting'
    },
    {
        path: '/home',
        component: () =>
            import ('../../views/Home.vue'),
        children: [{
                name: 'contentHTML',
                path: 'contentHTML',
                component: () =>
                    import ('../../components/ContentHTML.vue'),
                props: (route) => ({ id: route.params.id, ...route.query }),
                children: [{
                    name: 'msg',
                    path: 'msg',
                    component: () =>
                        import ('../../components/Msg.vue'),
                    props: (route) => ({ id: route.params.id, ...route.query })
                }, {
                    name: 'setting',
                    path: 'setting',
                    component: () =>
                        import ('../../components/Setting.vue'),
                    props: (route) => ({ id: route.params.id, ...route.query })
                }]
            }

        ],
        props: (route) => ({ id: route.params.id, ...route.query })
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