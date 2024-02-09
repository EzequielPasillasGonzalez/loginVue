export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "auth" */ '../layouts/loginLayout.vue'),
    children:[
        {
            path: '',
            name: 'no-login',
            component: () => import(/* webpackChunkName: "no-login" */ '../views/noLoginView.vue')
        }
    ]
}
