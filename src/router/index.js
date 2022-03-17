import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ "../views/TheHome.vue")
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import(/* webpackChunkName: "login" */ "../views/FormLogin.vue")
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && localStorage.getItem('jwt') == null) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router
